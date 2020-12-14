# JS SDK [![npm version](https://badge.fury.io/js/%40wavesenterprise%2Fwaves-api.svg)](https://badge.fury.io/js/%40wavesenterprise%2Fwaves-api)

WE Js Sdk is a javascript library for signing and broadcasting transactions on the Waves Enterprise network.

* Works both in browser and in the Node.js environment
* Supports [GOST](https://en.wikipedia.org/wiki/GOST) standards
* Supports the signing of [all types](https://docs.wavesenterprise.com/en/1.3.0/how-the-platform-works/data-structures/transactions-structure.html#id26) of Waves Enterprise network transactions

## Quickstart

##### 1. Download and install Node.js (LTS) from the [official website](https://nodejs.org/en/download/)

##### 2. Install js sdk package using npm:
```
npm install @wavesenterprise/js-sdk --save
```

##### 3. Import js-sdk package:
```
import WeSdk from '@wavesenterprise/js-sdk'
```
or use require:

`const WeSdk = require('@wavesenterprise/js-sdk');`

##### 4. Initialize library:
```
const config = {
    ...WeSdk.MAINNET_CONFIG,
    nodeAddress: 'https://hoover.welocal.dev/node-0',
    crypto: 'waves',
    networkByte: 'V'.charCodeAt(0)
}

const Waves = WeSdk.create({
    initialConfiguration: config,
    fetchInstance: window.fetch // For Node.js use node-fetch: check /examples
});
```

##### 5. Create and broadcast transaction:
```
const seed = Waves.Seed.fromExistingPhrase('examples seed phrase');

const txBody = {
    recipient: seed.address, // Send tokens to the same address
    assetId: 'WAVES',
    amount: '10000',
    fee: '1000000',
    attachment: 'Examples transfer attachment',
    timestamp: Date.now()
};

const tx = Waves.API.Transactions.Transfer.V3(txBody);

await tx.broadcast(seed.keyPair)
```

## Transactions
#### Description
All types of transaction available by calling a function like Waves.API.Transactions.<TX_NAME>.<TX_VERSION>   
For example:
```
const tx = Waves.API.Transactions.Transfer.V3(txBody);
```

txBody - object with initial transaction body, you can init with empty body and set fields later, for example:

```
const tx = Waves.API.Transactions.Transfer.V3({});
tx.recipient = '12afdsdga243134';
tx.amount = 10000;
...
```

For successful transaction broadcast you must set all required fields,
except 'type', 'version', 'id', 'proofs' and 'senderPublicKey'(automatically taken from keyPair).  

Full description of transaction body see in the documentation: https://docs.wavesenterprise.com/en/latest/how-the-platform-works/data-structures/transactions-structure.html  

Transaction broadcast examples located in directory ./examples.  

To broadcast transaction - use method broadcast:
```
await tx.broadcast(seed.keyPair);
```

#### Transaction interface
Except broadcast also available next methods:

```typescript
interface Transaction {
    isValid(): boolean; // validate tx body
    getErrors(): string[]; // returns array of errors for invalid fields
    getSignature(privateKey: string): Promise<string>; // returns signature
    getId(): Promise<string>; // calculate tx id
    getBytes(): Promise<Uint8Array>; // internal method, returns bytes to sign
    broadcast(): Promise<object>;
}
```

#### Transaction types
Transaction name and its type id:
```typescript
const TRANSACTION_TYPES = {
  Issue: 3,
  Transfer: 4,
  Reissue: 5,
  Burn: 6,
  Lease: 8,
  LeaseCancel: 9,
  CreateAlias: 10,
  MassTransfer: 11,
  Data: 12,
  SetScript: 13,
  SponsorFee: 14,
  SetAssetScript: 15,
  Permit: 102,
  CreateContract: 103,
  CallContract: 104,
  DisableContract: 106,
  UpdateContract: 107,
  RegisterNode: 111,
  CreatePolicy: 112,
  UpdatePolicy: 113,
  PolicyDataHash: 114,
  Atomic: 120
}
```

## Additional features

#####Base58 encode/decode
```typescript
Waves.tools.base58.encode('Examples transfer attachment');
Waves.tools.base58.decode('123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz');
```
## More examples
In the /examples folder you can find complete examples of sending the most popular transactions.


To run examples:
1. Once install requirements and make a project build:

    `npm i && npm run build`
2. Broadcast following transactions:
     + Tokens transfer:
        
        `node examples/transfer`
     + Create Policy:
        
        `node examples/policy`
     + Grant and revoke blockchain permission:
     
        `node examples/permission`
     + Issue and Burn tokens
     
        `node examples/issue_burn`
     + Create docker contract
     
        `node examples/create-contract`
     + Call docker contract
     
        `node examples/call-contract`
     + Atomic (including two Transfers and PolicyDataHash)
     
        `node examples/atomic`
     
Using this examples, you can sign any other type of transaction using the transaction structure from [docs](https://docs.wavesenterprise.com/en/1.3.0/how-the-platform-works/data-structures/transactions-structure.html#id26).

## Using with oAuth
If blockchain Node using oAuth authorization, waves-api should be initialized with auth headers provided to fetch.

In our projects we use library api-token-refresher, provides automatic tokens refresh if access token is became expired.

Initialization is pretty simple:
```
import { init: initRefresher } from '@wavesenterprise/api-token-refresher/dist/fetch'

const { fetch } = initRefresher({
  authorization: {
    access_token, // JWT access token
    refresh_token // JWT refresh token
  }
});

const Waves = WeSdk.create({
    initialConfiguration: config,
    fetchInstance: fetch
});
```

You can also use custom solution for integration with oAuth.

### Seed

You can create a new random seed:

```
const seed = Waves.Seed.create();

console.log(seed.phrase); // 'hole law front bottom then mobile fabric under horse drink other member work twenty boss'
console.log(seed.address); // '3Mr5af3Y7r7gQej3tRtugYbKaPr5qYps2ei'
console.log(seed.keyPair); // { privateKey: 'HkFCbtBHX1ZUF42aNE4av52JvdDPWth2jbP88HPTDyp4', publicKey: 'AF9HLq2Rsv2fVfLPtsWxT7Y3S9ZTv6Mw4ZTp8K8LNdEp' }
```

That seed may be encrypted with a password:

```
const password = '0123456789';
const encrypted = seed.encrypt(password);

console.log(encrypted); // 'U2FsdGVkX1+5TpaxcK/eJyjht7bSpjLYlSU8gVXNapU3MG8xgWm3uavW37aPz/KTcROK7OjOA3dpCLXfZ4YjCV3OW2r1CCaUhOMPBCX64QA/iAlgPJNtfMvjLKTHZko/JDgrxBHgQkz76apORWdKEQ=='
```

...and decrypted using the same password:

```
const restoredPhrase = Waves.Seed.decryptSeedPhrase(encrypted, password);

console.log(restoredPhrase); // 'hole law front bottom then mobile fabric under horse drink other member work twenty boss'
```

You also can create a `Seed` object from an existing seed:

```
const anotherSeed = Waves.Seed.fromExistingPhrase('a seed which was backed up some time ago');

console.log(seed.phrase); // 'a seed which was backed up some time ago'
console.log(seed.address); // '3N3dy1P8Dccup5WnYsrC6VmaGHF6wMxdLn4'
console.log(seed.keyPair); // { privateKey: '2gSboTPsiQfi1i3zNtFppVJVgjoCA9P4HE9K95y8yCMm', publicKey: 'CFr94paUnDSTRk8jz6Ep3bzhXb9LKarNmLYXW6gqw6Y3' }
```

### Crypto Tool
Duplicate methods from blockchain node REST api: 
- crypto/encryptCommon
- crypto/encryptSeparate
- crypto/decrypt
  
 ```js
// example of usage in ./test/libs/data-encryption.spec.ts
// run test via command: mocha -r ts-node/register ./test/libs/data-encryption.spec.ts
```

## Authors

* [**Mikhail Tokarev**](https://github.com/mtfj) - *Initial refactoring*
* [**Alexander Kuvakin**](https://github.com/larsan12) - *Refactoring, add new transaction types*
* [**Artem Kolodko**](https://github.com/ArtemKolodko) - *Refactoring, examples*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
