/// <reference types="node" />
import http from 'http';
import { CompaniesIdPatchRequest } from '../model/companiesIdPatchRequest';
import { CompaniesLinkUnlinkIdPatchRequest } from '../model/companiesLinkUnlinkIdPatchRequest';
import { CompaniesList } from '../model/companiesList';
import { CompaniesPost200Response } from '../model/companiesPost200Response';
import { CompaniesPostRequest } from '../model/companiesPostRequest';
import { Company } from '../model/company';
import { CompanyAttributesInner } from '../model/companyAttributesInner';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum CompaniesApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class CompaniesApi {
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
    setApiKey(key: CompaniesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    companiesAttributesGet(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<CompanyAttributesInner>;
    }>;
    companiesGet(filters?: string, linkedContactsIds?: number, linkedDealsIds?: string, page?: number, limit?: number, sort?: 'asc' | 'desc', sortBy?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CompaniesList;
    }>;
    companiesIdDelete(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    companiesIdGet(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Company;
    }>;
    companiesIdPatch(id: string, body: CompaniesIdPatchRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Company;
    }>;
    companiesLinkUnlinkIdPatch(id: string, body: CompaniesLinkUnlinkIdPatchRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    companiesPost(body: CompaniesPostRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CompaniesPost200Response;
    }>;
}
