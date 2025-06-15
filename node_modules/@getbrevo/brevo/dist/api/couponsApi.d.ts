/// <reference types="node" />
import http from 'http';
import { CreateCouponCollection201Response } from '../model/createCouponCollection201Response';
import { CreateCouponCollectionRequest } from '../model/createCouponCollectionRequest';
import { CreateCouponsRequest } from '../model/createCouponsRequest';
import { GetCouponCollection } from '../model/getCouponCollection';
import { UpdateCouponCollection200Response } from '../model/updateCouponCollection200Response';
import { UpdateCouponCollectionRequest } from '../model/updateCouponCollectionRequest';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum CouponsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class CouponsApi {
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
    setApiKey(key: CouponsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createCouponCollection(createCouponCollection: CreateCouponCollectionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateCouponCollection201Response;
    }>;
    createCoupons(createCoupons: CreateCouponsRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getCouponCollection(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetCouponCollection;
    }>;
    getCouponCollections(limit?: number, offset?: number, sort?: 'asc' | 'desc', sortBy?: 'createdAt' | 'remainingCoupons' | 'expirationDate', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetCouponCollection;
    }>;
    updateCouponCollection(id: string, updateCouponCollection?: UpdateCouponCollectionRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UpdateCouponCollection200Response;
    }>;
}
