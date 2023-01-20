/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Guess } from "./guess";
import { Params } from "./params";
import { Wordle } from "./wordle";

export const protobufPackage = "wordle.wordle";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetWordleRequest {
  index: string;
}

export interface QueryGetWordleResponse {
  wordle: Wordle | undefined;
}

export interface QueryAllWordleRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllWordleResponse {
  wordle: Wordle[];
  pagination: PageResponse | undefined;
}

export interface QueryGetGuessRequest {
  index: string;
}

export interface QueryGetGuessResponse {
  guess: Guess | undefined;
}

export interface QueryAllGuessRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllGuessResponse {
  guess: Guess[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetWordleRequest(): QueryGetWordleRequest {
  return { index: "" };
}

export const QueryGetWordleRequest = {
  encode(message: QueryGetWordleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWordleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWordleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWordleRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetWordleRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWordleRequest>, I>>(object: I): QueryGetWordleRequest {
    const message = createBaseQueryGetWordleRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetWordleResponse(): QueryGetWordleResponse {
  return { wordle: undefined };
}

export const QueryGetWordleResponse = {
  encode(message: QueryGetWordleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wordle !== undefined) {
      Wordle.encode(message.wordle, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetWordleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetWordleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wordle = Wordle.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWordleResponse {
    return { wordle: isSet(object.wordle) ? Wordle.fromJSON(object.wordle) : undefined };
  },

  toJSON(message: QueryGetWordleResponse): unknown {
    const obj: any = {};
    message.wordle !== undefined && (obj.wordle = message.wordle ? Wordle.toJSON(message.wordle) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetWordleResponse>, I>>(object: I): QueryGetWordleResponse {
    const message = createBaseQueryGetWordleResponse();
    message.wordle = (object.wordle !== undefined && object.wordle !== null)
      ? Wordle.fromPartial(object.wordle)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWordleRequest(): QueryAllWordleRequest {
  return { pagination: undefined };
}

export const QueryAllWordleRequest = {
  encode(message: QueryAllWordleRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWordleRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWordleRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWordleRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllWordleRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWordleRequest>, I>>(object: I): QueryAllWordleRequest {
    const message = createBaseQueryAllWordleRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllWordleResponse(): QueryAllWordleResponse {
  return { wordle: [], pagination: undefined };
}

export const QueryAllWordleResponse = {
  encode(message: QueryAllWordleResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.wordle) {
      Wordle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllWordleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllWordleResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wordle.push(Wordle.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllWordleResponse {
    return {
      wordle: Array.isArray(object?.wordle) ? object.wordle.map((e: any) => Wordle.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllWordleResponse): unknown {
    const obj: any = {};
    if (message.wordle) {
      obj.wordle = message.wordle.map((e) => e ? Wordle.toJSON(e) : undefined);
    } else {
      obj.wordle = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllWordleResponse>, I>>(object: I): QueryAllWordleResponse {
    const message = createBaseQueryAllWordleResponse();
    message.wordle = object.wordle?.map((e) => Wordle.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetGuessRequest(): QueryGetGuessRequest {
  return { index: "" };
}

export const QueryGetGuessRequest = {
  encode(message: QueryGetGuessRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGuessRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGuessRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGuessRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetGuessRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetGuessRequest>, I>>(object: I): QueryGetGuessRequest {
    const message = createBaseQueryGetGuessRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetGuessResponse(): QueryGetGuessResponse {
  return { guess: undefined };
}

export const QueryGetGuessResponse = {
  encode(message: QueryGetGuessResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.guess !== undefined) {
      Guess.encode(message.guess, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetGuessResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetGuessResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guess = Guess.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetGuessResponse {
    return { guess: isSet(object.guess) ? Guess.fromJSON(object.guess) : undefined };
  },

  toJSON(message: QueryGetGuessResponse): unknown {
    const obj: any = {};
    message.guess !== undefined && (obj.guess = message.guess ? Guess.toJSON(message.guess) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetGuessResponse>, I>>(object: I): QueryGetGuessResponse {
    const message = createBaseQueryGetGuessResponse();
    message.guess = (object.guess !== undefined && object.guess !== null) ? Guess.fromPartial(object.guess) : undefined;
    return message;
  },
};

function createBaseQueryAllGuessRequest(): QueryAllGuessRequest {
  return { pagination: undefined };
}

export const QueryAllGuessRequest = {
  encode(message: QueryAllGuessRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGuessRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGuessRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllGuessRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllGuessRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllGuessRequest>, I>>(object: I): QueryAllGuessRequest {
    const message = createBaseQueryAllGuessRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllGuessResponse(): QueryAllGuessResponse {
  return { guess: [], pagination: undefined };
}

export const QueryAllGuessResponse = {
  encode(message: QueryAllGuessResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.guess) {
      Guess.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllGuessResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllGuessResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.guess.push(Guess.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllGuessResponse {
    return {
      guess: Array.isArray(object?.guess) ? object.guess.map((e: any) => Guess.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllGuessResponse): unknown {
    const obj: any = {};
    if (message.guess) {
      obj.guess = message.guess.map((e) => e ? Guess.toJSON(e) : undefined);
    } else {
      obj.guess = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllGuessResponse>, I>>(object: I): QueryAllGuessResponse {
    const message = createBaseQueryAllGuessResponse();
    message.guess = object.guess?.map((e) => Guess.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Wordle by index. */
  Wordle(request: QueryGetWordleRequest): Promise<QueryGetWordleResponse>;
  /** Queries a list of Wordle items. */
  WordleAll(request: QueryAllWordleRequest): Promise<QueryAllWordleResponse>;
  /** Queries a Guess by index. */
  Guess(request: QueryGetGuessRequest): Promise<QueryGetGuessResponse>;
  /** Queries a list of Guess items. */
  GuessAll(request: QueryAllGuessRequest): Promise<QueryAllGuessResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Wordle = this.Wordle.bind(this);
    this.WordleAll = this.WordleAll.bind(this);
    this.Guess = this.Guess.bind(this);
    this.GuessAll = this.GuessAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("wordle.wordle.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Wordle(request: QueryGetWordleRequest): Promise<QueryGetWordleResponse> {
    const data = QueryGetWordleRequest.encode(request).finish();
    const promise = this.rpc.request("wordle.wordle.Query", "Wordle", data);
    return promise.then((data) => QueryGetWordleResponse.decode(new _m0.Reader(data)));
  }

  WordleAll(request: QueryAllWordleRequest): Promise<QueryAllWordleResponse> {
    const data = QueryAllWordleRequest.encode(request).finish();
    const promise = this.rpc.request("wordle.wordle.Query", "WordleAll", data);
    return promise.then((data) => QueryAllWordleResponse.decode(new _m0.Reader(data)));
  }

  Guess(request: QueryGetGuessRequest): Promise<QueryGetGuessResponse> {
    const data = QueryGetGuessRequest.encode(request).finish();
    const promise = this.rpc.request("wordle.wordle.Query", "Guess", data);
    return promise.then((data) => QueryGetGuessResponse.decode(new _m0.Reader(data)));
  }

  GuessAll(request: QueryAllGuessRequest): Promise<QueryAllGuessResponse> {
    const data = QueryAllGuessRequest.encode(request).finish();
    const promise = this.rpc.request("wordle.wordle.Query", "GuessAll", data);
    return promise.then((data) => QueryAllGuessResponse.decode(new _m0.Reader(data)));
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
