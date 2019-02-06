// todo not needed. for manual testing purposes only

import * as WavesAPI from '../dist/waves-api';

let requiredConfigValues = {
    networkByte: 84,
    nodeAddress: 'http://2.testnet-pos.vostoknodes.com:6862',
    matcherAddress: 'http://2.testnet-pos.vostoknodes.com:6862',
    crypto: 'waves'
};

let allConfigValues = {
    ...requiredConfigValues
};

const seed = {
    phrase:
        'sign clay point alpha enough supreme magic auto echo ladder reason weather twin sniff north',
    address: '3N6J8YZ4VGMrcX9fHRoJutfGPmiWziMd8z7',
    keyPair:
        {
            // privateKey: '7Qi7EuGU74GrnCuoSuEETNyGJFNnxNwLUTPurejcUWod',
            // publicKey: 'F2W3jcpP1acrH62FVs97FkMPoqkvumwkXD7BepkZgwWM',

            publicKey: '7Qi7EuGU74GrnCuoSuEETNyGJFNnxNwLUTPurejcUWod',
            privateKey: 'F2W3jcpP1acrH62FVs97FkMPoqkvumwkXD7BepkZgwWM'
        }
};

/*
  {
        phrase:
         'stage chicken around globe typical senior buddy prepare term decrease there three clutch tackle cloud',
        address: '3FX1SurWuAqycknUBdMDR6Y8fs7Fcn1U39z',
        keyPair:
         { privateKey: '4GtBACvgnQvvEs9NP7iYb4GQ7SKfyowUkSBGdiMAZaFp',
           publicKey: 'FxgMbE4fjGtnGUY6MvhJBx9gtu3pe4U7e1kCH9JD5AN' }
   }
*/


const permissionTxMockWaves = {
    version: 1,
    type: 102,
    senderPublicKey: "3RBMLDrd27WAfv84abTZSZTE5ZBsp5JX6dNz3YteQwNz",
    timestamp: Date.now(),
    fee: '0',
    opType: "remove",
    role: "dex",
    target: "3FX1SurWuAqycknUBdMDR6Y8fs7Fcn1U39z",
    dueTimestamp: Date.now() + 500000
};

const Waves = WavesAPI.create(allConfigValues);


const transferData = {

    // An arbitrary address; mine, in this example
    recipient: '3N6J8YZ4VGMrcX9fHRoJutfGPmiWziMd8z7',

    // ID of a token, or WAVES
    assetId: 'WAVES',

    // The real amount is the given number divided by 10^(precision of the token)
    amount: 120000,

    // The same rules for these two fields
    feeAssetId: 'WAVES',
    fee: 100000,

    // 140 bytes of data (it's allowed to use Uint8Array here)
    attachment: 'мой аттач some! data?',

    timestamp: Date.now()

};

// Waves.API.Node.transactions.broadcast('transfer', transferData, seed.keyPair).then((responseData) => {
//    console.log(responseData);
// });

const t = {
    "senderPublicKey": "GmnTn6yVk7CNmm5h7NvKGz9Q6Bo7LdG5iM7FSso9k4tZ",
    "alias": "wolfarion",
    "fee": 100000,
    "timestamp": 1543235238318,
    "proofs": ["2Kozpqqzdz2cA3fb4brER9gUyLk47J7WD7A26dSze5XbcG13aDmu2FvTmutX3uD42k8vZFmY6zk83mhFyXZz24q4"],
    "type": 10,
    "version": 2
};

const leaseData = {

    recipient: '3FX1SurWuAqycknUBdMDR6Y8fs7Fcn1U39z',

    // Both amount and fee may be presented as divided by 10^8 (8 is Waves precision)
    amount: 20000, // 10 Waves
    fee: 100000, // 0.001 Waves

    timestamp: Date.now()

};

// Waves.API.Node.transactions.broadcast('lease', leaseData, seed.keyPair).then((responseData) => {
//    console.log(responseData);
// });

const cancelLeasingData = {

    // Related Lease transaction ID
    leaseId: '3zPsiE5rXRX1sHfn3D59JN1boMzqcvrizBk1ZCZZEuxz',

    fee: 100000,
    timestamp: Date.now()

};

/*const massTransfer = {
    timestamp: Date.now(),
    transfers: [
        {
            recipient: 'wolfarion',
            amount: '50000'
        }
    ],
    attachment: 'мой аттач some! data?',
    assetId: 'WAVES',
    fee: 200000
};

Waves.API.Node.transactions.broadcast('massTransfer', massTransfer, seed.keyPair).then((responseData) => {
    console.log(responseData);
});*/

const issueData = {
    name: 'test-token3',
    description: '',

    // With given options you'll have 100000.00000 tokens
    quantity: '9223372036854775806',
    precision: 5,

    // This flag defines whether additional emission is possible
    reissuable: false,

    fee: 100000000,
    timestamp: Date.now()
};

const iss = {
    "type": 3,
    "id": "EMN4GrZHZKMfHVpiaM6H9ejfjmfqrV6h6DSPHKfLCPiw",
    "sender": "3N6J8YZ4VGMrcX9fHRoJutfGPmiWziMd8z7",
    "senderPublicKey": "7Qi7EuGU74GrnCuoSuEETNyGJFNnxNwLUTPurejcUWod",
    "fee": 100000000,
    "timestamp": 1549446741610,
    "proofs": [
        "4joh3ZhJ5JYAwDjHF8iU3mFDsFcFCtCenMd91WZg5wEsmnzybQg354FDn75brRuT8tNQRsBHN4LPFgHFw6JuoHDy"
    ],
    "version": 2,
    "assetId": "EMN4GrZHZKMfHVpiaM6H9ejfjmfqrV6h6DSPHKfLCPiw",
    "name": "test-token3",
    "quantity": 9223372036854776000,
    "reissuable": false,
    precision: 5,
    "decimals": 5,
    "description": "",
//     "script": "base64:AQa3b8tH"
};

// Waves.API.Node.transactions.sign('issue', iss, seed.keyPair).then((responseData) => {
//    console.log(responseData);
// });


//Waves.API.Node.transactions.broadcast('issue', iss, seed.keyPair).then((responseData) => {
//    console.log(responseData);
//});

const permissionTx = {
    version: 1,
    // type: 102,
    timestamp: Date.now(),
    fee: '0',
    opType: "remove",
    role: "issuer",
    target: "3Fdc25KFhRAtY3PB3viHCkHKiz4LmAsyGpe",
    // senderPublicKey: seed.keyPair.publicKey
};

// Waves.API.Node.transactions.broadcast('permit', permissionTx, seed.keyPair).then((responseData) => {
// console.log(responseData);
// });


const scriptData = {
    "fee": 5000000,
    "timestamp": 1545992919891,
    "script": "base64:AQQAAAAHJG1hdGNoMAUAAAACdHgG+RXSzQ==",
    "name": "faucet",
    "description": "description"
};

/*
Waves.API.Node.transactions.broadcast('setScript', scriptData, seed.keyPair).then((responseData) => {
    console.log(responseData);
});*/
