/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "wordle.wordle";

export interface MsgSubmitWordle {
  creator: string;
  word: string;
}

export interface MsgSubmitWordleResponse {
}

export interface MsgSubmitGuess {
  creator: string;
  word: string;
}

export interface MsgSubmitGuessResponse {
  title: string;
  body: string;
}

function createBaseMsgSubmitWordle(): MsgSubmitWordle {
  return { creator: "", word: "" };
}

export const MsgSubmitWordle = {
  encode(message: MsgSubmitWordle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.word !== "") {
      writer.uint32(18).string(message.word);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitWordle {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitWordle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.word = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitWordle {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      word: isSet(object.word) ? String(object.word) : "",
    };
  },

  toJSON(message: MsgSubmitWordle): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.word !== undefined && (obj.word = message.word);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitWordle>, I>>(object: I): MsgSubmitWordle {
    const message = createBaseMsgSubmitWordle();
    message.creator = object.creator ?? "";
    message.word = object.word ?? "";
    return message;
  },
};

function createBaseMsgSubmitWordleResponse(): MsgSubmitWordleResponse {
  return {};
}

export const MsgSubmitWordleResponse = {
  encode(_: MsgSubmitWordleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitWordleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitWordleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitWordleResponse {
    return {};
  },

  toJSON(_: MsgSubmitWordleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitWordleResponse>, I>>(_: I): MsgSubmitWordleResponse {
    const message = createBaseMsgSubmitWordleResponse();
    return message;
  },
};

function createBaseMsgSubmitGuess(): MsgSubmitGuess {
  return { creator: "", word: "" };
}

export const MsgSubmitGuess = {
  encode(message: MsgSubmitGuess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.word !== "") {
      writer.uint32(18).string(message.word);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitGuess {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitGuess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.word = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitGuess {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      word: isSet(object.word) ? String(object.word) : "",
    };
  },

  toJSON(message: MsgSubmitGuess): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.word !== undefined && (obj.word = message.word);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitGuess>, I>>(object: I): MsgSubmitGuess {
    const message = createBaseMsgSubmitGuess();
    message.creator = object.creator ?? "";
    message.word = object.word ?? "";
    return message;
  },
};

function createBaseMsgSubmitGuessResponse(): MsgSubmitGuessResponse {
  return { title: "", body: "" };
}

export const MsgSubmitGuessResponse = {
  encode(message: MsgSubmitGuessResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitGuessResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitGuessResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitGuessResponse {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      body: isSet(object.body) ? String(object.body) : "",
    };
  },

  toJSON(message: MsgSubmitGuessResponse): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitGuessResponse>, I>>(object: I): MsgSubmitGuessResponse {
    const message = createBaseMsgSubmitGuessResponse();
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SubmitWordle(request: MsgSubmitWordle): Promise<MsgSubmitWordleResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SubmitGuess(request: MsgSubmitGuess): Promise<MsgSubmitGuessResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SubmitWordle = this.SubmitWordle.bind(this);
    this.SubmitGuess = this.SubmitGuess.bind(this);
  }
  SubmitWordle(request: MsgSubmitWordle): Promise<MsgSubmitWordleResponse> {
    const data = MsgSubmitWordle.encode(request).finish();
    const promise = this.rpc.request("wordle.wordle.Msg", "SubmitWordle", data);
    return promise.then((data) => MsgSubmitWordleResponse.decode(new _m0.Reader(data)));
  }

  SubmitGuess(request: MsgSubmitGuess): Promise<MsgSubmitGuessResponse> {
    const data = MsgSubmitGuess.encode(request).finish();
    const promise = this.rpc.request("wordle.wordle.Msg", "SubmitGuess", data);
    return promise.then((data) => MsgSubmitGuessResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
