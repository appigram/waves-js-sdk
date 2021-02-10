import { IWavesConfig } from '../interfaces';

import { config as outerConfig} from '@wavesenterprise/transactions-factory';

import { DEFAULT_BASIC_CONFIG } from './constants';
import { normalizeHost } from './utils/request';


const config: IWavesConfig = Object.create(null);

function checkRequiredFields(conf) {
    if (!conf.networkByte) throw new Error('Missing network byte');
    if (!conf.nodeAddress) throw new Error('Missing node address');
    if (!conf.matcherAddress) throw new Error('Missing matcher address');
}


export default {

    getNetworkByte(): number {
        return config.networkByte;
    },

    getNodeAddress(): string {
        return config.nodeAddress;
    },

    isCryptoGost(): boolean {
        return config.crypto === 'gost'
    },

    getMatcherAddress(): string {
        return config.matcherAddress;
    },

    getMinimumSeedLength(): number {
        return config.minimumSeedLength;
    },

    getRequestParams() {
        return {
            offset: config.requestOffset,
            limit: config.requestLimit
        };
    },

    getAssetFactory() {
        return config.assetFactory;
    },

    getLogLevel() {
        return config.logLevel;
    },

    getTimeDiff() {
        return config.timeDiff;
    },

    get(): IWavesConfig {
        return { ...config };
    },

    getFee(type: number): number {
      if (!config.minimumFee) {
          return null;
      }
      return config.minimumFee[type]
    },

    set(newConfig: Partial<IWavesConfig>) {

        outerConfig.set(newConfig);

        // Extend incoming objects only when `config` is empty
        if (Object.keys(config).length === 0) {
            newConfig = { ...DEFAULT_BASIC_CONFIG, ...newConfig };
        }

        Object.keys(newConfig).forEach((key) => {

            switch (key) {

                case 'nodeAddress':
                case 'matcherAddress':
                    config[key] = normalizeHost(newConfig[key]);
                    break;

                default:
                    config[key] = newConfig[key];
                    break;

            }

        });

        checkRequiredFields(config);

    },

    clear() {
        Object.keys(config).forEach((key) => {
            delete config[key];
        });
    }

}
