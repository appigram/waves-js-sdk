// package: wavesenterprise
// file: util/contract_status_service.proto

import * as jspb from "google-protobuf"
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb"

export class ContractExecutionRequest extends jspb.Message {
  getTxId(): Uint8Array | string
  getTxId_asU8(): Uint8Array
  getTxId_asB64(): string
  setTxId(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ContractExecutionRequest.AsObject
  static toObject(includeInstance: boolean, msg: ContractExecutionRequest): ContractExecutionRequest.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: ContractExecutionRequest, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ContractExecutionRequest
  static deserializeBinaryFromReader(message: ContractExecutionRequest, reader: jspb.BinaryReader): ContractExecutionRequest
}

export namespace ContractExecutionRequest {
  export type AsObject = {
    txId: Uint8Array | string,
  }
}

export class ContractExecutionResponse extends jspb.Message {
  getSender(): Uint8Array | string
  getSender_asU8(): Uint8Array
  getSender_asB64(): string
  setSender(value: Uint8Array | string): void

  getTxId(): Uint8Array | string
  getTxId_asU8(): Uint8Array
  getTxId_asB64(): string
  setTxId(value: Uint8Array | string): void

  getStatus(): ContractExecutionResponse.StatusMap[keyof ContractExecutionResponse.StatusMap]
  setStatus(value: ContractExecutionResponse.StatusMap[keyof ContractExecutionResponse.StatusMap]): void

  hasCode(): boolean
  clearCode(): void
  getCode(): google_protobuf_wrappers_pb.Int32Value | undefined
  setCode(value?: google_protobuf_wrappers_pb.Int32Value): void

  getMessage(): string
  setMessage(value: string): void

  getTimestamp(): number
  setTimestamp(value: number): void

  getSignature(): Uint8Array | string
  getSignature_asU8(): Uint8Array
  getSignature_asB64(): string
  setSignature(value: Uint8Array | string): void

  serializeBinary(): Uint8Array
  toObject(includeInstance?: boolean): ContractExecutionResponse.AsObject
  static toObject(includeInstance: boolean, msg: ContractExecutionResponse): ContractExecutionResponse.AsObject
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>}
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>}
  static serializeBinaryToWriter(message: ContractExecutionResponse, writer: jspb.BinaryWriter): void
  static deserializeBinary(bytes: Uint8Array): ContractExecutionResponse
  static deserializeBinaryFromReader(message: ContractExecutionResponse, reader: jspb.BinaryReader): ContractExecutionResponse
}

export namespace ContractExecutionResponse {
  export type AsObject = {
    sender: Uint8Array | string,
    txId: Uint8Array | string,
    status: ContractExecutionResponse.StatusMap[keyof ContractExecutionResponse.StatusMap],
    code?: google_protobuf_wrappers_pb.Int32Value.AsObject,
    message: string,
    timestamp: number,
    signature: Uint8Array | string,
  }

  export interface StatusMap {
    SUCCESS: 0
    ERROR: 1
    FAILURE: 2
  }

  export const Status: StatusMap
}

