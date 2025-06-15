/// <reference types="node" />
import http from 'http';
import { GetWhatsappEventReport } from '../model/getWhatsappEventReport';
import { SendWhatsappMessage } from '../model/sendWhatsappMessage';
import { SendWhatsappMessage201Response } from '../model/sendWhatsappMessage201Response';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum TransactionalWhatsAppApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class TransactionalWhatsAppApi {
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
    setApiKey(key: TransactionalWhatsAppApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    getWhatsappEventReport(limit?: number, offset?: number, startDate?: string, endDate?: string, days?: number, contactNumber?: string, event?: 'sent' | 'delivered' | 'read' | 'error' | 'unsubscribe' | 'reply' | 'soft-bounce', sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWhatsappEventReport;
    }>;
    sendWhatsappMessage(sendWhatsappMessage: SendWhatsappMessage, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SendWhatsappMessage201Response;
    }>;
}
