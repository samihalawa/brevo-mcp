/// <reference types="node" />
import http from 'http';
import { CreateExternalFeed } from '../model/createExternalFeed';
import { CreateExternalFeed201Response } from '../model/createExternalFeed201Response';
import { GetAllExternalFeeds } from '../model/getAllExternalFeeds';
import { GetExternalFeedByUUID } from '../model/getExternalFeedByUUID';
import { UpdateExternalFeed } from '../model/updateExternalFeed';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum ExternalFeedsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class ExternalFeedsApi {
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
    setApiKey(key: ExternalFeedsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createExternalFeed(createExternalFeed: CreateExternalFeed, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateExternalFeed201Response;
    }>;
    deleteExternalFeed(uuid: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getAllExternalFeeds(search?: string, startDate?: string, endDate?: string, sort?: 'asc' | 'desc', authType?: 'basic' | 'token' | 'noAuth', limit?: number, offset?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetAllExternalFeeds;
    }>;
    getExternalFeedByUUID(uuid: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetExternalFeedByUUID;
    }>;
    updateExternalFeed(uuid: string, updateExternalFeed: UpdateExternalFeed, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
