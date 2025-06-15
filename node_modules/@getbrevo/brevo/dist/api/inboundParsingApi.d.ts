/// <reference types="node" />
/// <reference types="node" />
import http from 'http';
import { GetInboundEmailEvents } from '../model/getInboundEmailEvents';
import { GetInboundEmailEventsByUuid } from '../model/getInboundEmailEventsByUuid';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum InboundParsingApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class InboundParsingApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
        apiKey: ApiKeyAuth;
        partnerKey: ApiKeyAuth;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: InboundParsingApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    getInboundEmailAttachment(downloadToken: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    getInboundEmailEvents(sender?: string, startDate?: string, endDate?: string, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetInboundEmailEvents;
    }>;
    getInboundEmailEventsByUuid(uuid: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetInboundEmailEventsByUuid;
    }>;
}
