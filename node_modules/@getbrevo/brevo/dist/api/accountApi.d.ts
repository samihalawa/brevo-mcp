/// <reference types="node" />
import http from 'http';
import { GetAccount } from '../model/getAccount';
import { GetAccountActivity } from '../model/getAccountActivity';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum AccountApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class AccountApi {
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
    setApiKey(key: AccountApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    getAccount(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetAccount;
    }>;
    getAccountActivity(startDate?: string, endDate?: string, limit?: number, offset?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetAccountActivity;
    }>;
}
