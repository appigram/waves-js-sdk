export type TBuffer = Uint8Array | number[];

export type TLogLevel = 'none' | 'error' | 'warning' | 'info';
export type TCrypto = 'waves' | 'gost'

export interface IKeyPair {
    readonly privateKey: string;
    readonly publicKey: string;
}

export interface IKeyPairBytes {
    readonly privateKey: Uint8Array;
    readonly publicKey: Uint8Array;
}

export interface IWavesBasicConfig {
    minimumSeedLength: number;
    requestOffset: number;
    requestLimit: number;
    logLevel: TLogLevel;
    timeDiff: number;
    crypto: string
}

export interface IWavesConfig extends IWavesBasicConfig {
    networkByte: number;
    nodeAddress: string;
    matcherAddress: string;
    assetFactory?: Function;
    minimumFee?: object;
    grpcAddress?: string;
}


// Missing interfaces
declare global {
    interface Window {
        msCrypto?: any;
        Response?: any;
        Promise: PromiseConstructor;
    }

    interface ErrorConstructor {
        captureStackTrace(thisArg: any, func: any): void;
    }
}


// Replacement for --allowJs
declare module '*.js' {
    const content: {
        [key: string]: any;
    };
    export = content;
}