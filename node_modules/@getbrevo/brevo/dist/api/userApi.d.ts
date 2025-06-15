/// <reference types="node" />
import http from 'http';
import { GetInvitedUsersList } from '../model/getInvitedUsersList';
import { GetUserPermission } from '../model/getUserPermission';
import { Inviteuser } from '../model/inviteuser';
import { PutRevokeUserPermission } from '../model/putRevokeUserPermission';
import { Putresendcancelinvitation } from '../model/putresendcancelinvitation';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum UserApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class UserApi {
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
    setApiKey(key: UserApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    editUserPermission(updatePermissions: Inviteuser, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Inviteuser;
    }>;
    getInvitedUsersList(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetInvitedUsersList;
    }>;
    getUserPermission(email: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetUserPermission;
    }>;
    inviteuser(sendInvitation: Inviteuser, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Inviteuser;
    }>;
    putRevokeUserPermission(email: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PutRevokeUserPermission;
    }>;
    putresendcancelinvitation(action: 'resend' | 'cancel', email: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Putresendcancelinvitation;
    }>;
}
