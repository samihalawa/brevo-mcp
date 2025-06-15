/// <reference types="node" />
import http from 'http';
import { CreatePaymentRequest } from '../model/createPaymentRequest';
import { CreatePaymentResponse } from '../model/createPaymentResponse';
import { GetPaymentRequest } from '../model/getPaymentRequest';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum PaymentsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class PaymentsApi {
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
    setApiKey(key: PaymentsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createPaymentRequest(createPaymentRquest: CreatePaymentRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreatePaymentResponse;
    }>;
    deletePaymentRequest(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getPaymentRequest(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetPaymentRequest;
    }>;
}
