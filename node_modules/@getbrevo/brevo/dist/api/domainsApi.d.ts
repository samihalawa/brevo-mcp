/// <reference types="node" />
import http from 'http';
import { AuthenticateDomainModel } from '../model/authenticateDomainModel';
import { CreateDomain } from '../model/createDomain';
import { CreateDomainModel } from '../model/createDomainModel';
import { GetDomainConfigurationModel } from '../model/getDomainConfigurationModel';
import { GetDomainsList } from '../model/getDomainsList';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum DomainsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class DomainsApi {
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
    setApiKey(key: DomainsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    authenticateDomain(domainName: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: AuthenticateDomainModel;
    }>;
    createDomain(domainName?: CreateDomain, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateDomainModel;
    }>;
    deleteDomain(domainName: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getDomainConfiguration(domainName: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDomainConfigurationModel;
    }>;
    getDomains(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetDomainsList;
    }>;
}
