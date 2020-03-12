import {IHash} from '../../interfaces';

import {libs} from '@vostokplatform/signature-generator';

import {WAVES} from '../constants';
import config from '../config';
import BigNumber from '../libs/bignumber';

declare function unescape(s: string): string;

export function normalizeAssetId(original) {
    if (!original || original === WAVES) {
        return '';
    } else {
        return original;
    }
}

export function removeRecipientPrefix(original: string) {
    if (original.slice(0, 8) === 'address:') {
        return original.slice(8);
    } else {
        return original;
    }
}

export function removeAliasPrefix(original: string) {
    if (original.slice(0, 6) === 'alias:') {
        return original.slice(8); // Mind the network byte characters
    } else {
        return original;
    }
}

// Adjusts user time to UTC
// Should be used for creating transactions and requests only
export function getTimestamp(timestamp?) {
    return (timestamp || Date.now()) + config.getTimeDiff();
}

export function precisionCheck(precision) {
    return (precision >= 0 && precision <= 8);
}


function castFromBytesToBase58(bytes, sliceIndex) {
    const processedBytes = Uint8Array.from(Array.prototype.slice.call(bytes, sliceIndex));
    return libs.base58.encode(processedBytes);
}

/*
decode
function: /utils/base58ToString
usage: Waves.tools.base58.base58ToString(str)
*/
function castFromStringToBase58(str, sliceIndex) {
    const processedBytes = Uint8Array.from(Array.prototype.slice.call(unescape(encodeURIComponent(str))
        .split('').map(e => e.charCodeAt(0)), sliceIndex));
    return libs.base58.encode(processedBytes);
}

function castFromRawToPrefixed(raw) {
    if (raw.length > 30) {
        return `address:${raw}`;
    } else {
        const networkCharacter = String.fromCharCode(config.getNetworkByte());
        return `alias:${networkCharacter}:${raw}`;
    }
}

export function createRemapper(rules) {

    return function (data: any): any {

        return Object.keys({...data, ...rules}).reduce((result, key) => {

            const rule = rules[key];

            if (typeof rule === 'function') {
                // Process with a function
                result[key] = rule(data[key]);
            } else if (typeof rule === 'string') {
                // Rename a field with the rule name
                result[rule] = data[key];
            } else if (rule && typeof rule === 'object') {

                // Transform according to the rule
                if (rule.from === 'bytes' && rule.to === 'base58') {
                    result[key] = castFromBytesToBase58(data[key], rule.slice || 0);

                } else if (rule.from === 'string' && rule.to === 'base58') {
                    result[key] = castFromStringToBase58(data[key], rule.slice || 0);

                } else if (rule.from === 'string' && rule.to === 'bignumber') {
                    result[key] = new BigNumber(data[key]);

                } else if (rule.from === 'raw' && rule.to === 'prefixed') {
                    if (data[key].length && data[key][0].recipient) { // if mass transfers [{recipient: 'address', amount: '100'}] amount = long
                        result[rule.path || key] = data[key].map(o => ({
                            ...o,
                            amount: new BigNumber(o.amount),
                            recipient: castFromRawToPrefixed(o.recipient)
                        }));
                    } else {
                        result[rule.path || key] = castFromRawToPrefixed(data[key])
                    }
                }

            } else if (rule !== null) {
                // Leave the data as is (or add some default value from the rule)
                result[key] = typeof data[key] !== 'undefined' ? data[key] : rule;
            }

            return result;

        }, Object.create(null));

    };

}
