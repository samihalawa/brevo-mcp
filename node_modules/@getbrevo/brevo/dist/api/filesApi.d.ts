/// <reference types="node" />
import http from 'http';
import { FileData } from '../model/fileData';
import { FileDownloadableLink } from '../model/fileDownloadableLink';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
import { RequestFile } from './apis';
export declare enum FilesApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class FilesApi {
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
    setApiKey(key: FilesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    crmFilesGet(entity?: 'companies' | 'deals' | 'contacts', entityIds?: string, dateFrom?: number, dateTo?: number, offset?: number, limit?: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<FileData>;
    }>;
    crmFilesIdDataGet(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FileData;
    }>;
    crmFilesIdDelete(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    crmFilesIdGet(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FileDownloadableLink;
    }>;
    crmFilesPost(file: RequestFile, dealId?: string, contactId?: number, companyId?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: FileData;
    }>;
}
