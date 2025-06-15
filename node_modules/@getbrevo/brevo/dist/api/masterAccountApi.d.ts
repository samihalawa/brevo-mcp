/// <reference types="node" />
import http from 'http';
import { CorporateGroupDetailsResponse } from '../model/corporateGroupDetailsResponse';
import { CorporateGroupPost201Response } from '../model/corporateGroupPost201Response';
import { CorporateGroupPostRequest } from '../model/corporateGroupPostRequest';
import { CorporateGroupUnlinkGroupIdSubAccountsPutRequest } from '../model/corporateGroupUnlinkGroupIdSubAccountsPutRequest';
import { CorporateSubAccountIpAssociatePostRequest } from '../model/corporateSubAccountIpAssociatePostRequest';
import { CorporateSubAccountIpDissociatePutRequest } from '../model/corporateSubAccountIpDissociatePutRequest';
import { CorporateUserInvitationActionEmailPut200Response } from '../model/corporateUserInvitationActionEmailPut200Response';
import { CreateApiKeyRequest } from '../model/createApiKeyRequest';
import { CreateApiKeyResponse } from '../model/createApiKeyResponse';
import { CreateSubAccount } from '../model/createSubAccount';
import { CreateSubAccountResponse } from '../model/createSubAccountResponse';
import { GetAccountActivity } from '../model/getAccountActivity';
import { GetCorporateInvitedUsersList } from '../model/getCorporateInvitedUsersList';
import { GetCorporateUserPermission } from '../model/getCorporateUserPermission';
import { GetSsoToken } from '../model/getSsoToken';
import { GetSubAccountGroups200ResponseInner } from '../model/getSubAccountGroups200ResponseInner';
import { InviteAdminUser } from '../model/inviteAdminUser';
import { MasterDetailsResponse } from '../model/masterDetailsResponse';
import { SsoTokenRequest } from '../model/ssoTokenRequest';
import { SsoTokenRequestCorporate } from '../model/ssoTokenRequestCorporate';
import { SubAccountAppsToggleRequest } from '../model/subAccountAppsToggleRequest';
import { SubAccountDetailsResponse } from '../model/subAccountDetailsResponse';
import { SubAccountUpdatePlanRequest } from '../model/subAccountUpdatePlanRequest';
import { SubAccountsResponse } from '../model/subAccountsResponse';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum MasterAccountApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class MasterAccountApi {
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
    setApiKey(key: MasterAccountApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    corporateGroupIdDelete(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    corporateGroupIdGet(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CorporateGroupDetailsResponse;
    }>;
    corporateGroupIdPut(id: string, body: CorporateGroupPostRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    corporateGroupPost(body: CorporateGroupPostRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CorporateGroupPost201Response;
    }>;
    corporateGroupUnlinkGroupIdSubAccountsPut(groupId: string, body: CorporateGroupUnlinkGroupIdSubAccountsPutRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    corporateMasterAccountGet(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: MasterDetailsResponse;
    }>;
    corporateSsoTokenPost(ssoTokenRequestCorporate: SsoTokenRequestCorporate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSsoToken;
    }>;
    corporateSubAccountGet(offset: number, limit: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SubAccountsResponse;
    }>;
    corporateSubAccountIdApplicationsTogglePut(id: number, toggleApplications: SubAccountAppsToggleRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    corporateSubAccountIdDelete(id: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    corporateSubAccountIdGet(id: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SubAccountDetailsResponse;
    }>;
    corporateSubAccountIdPlanPut(id: number, updatePlanDetails: SubAccountUpdatePlanRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    corporateSubAccountIpAssociatePost(body: CorporateSubAccountIpAssociatePostRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    corporateSubAccountIpDissociatePut(body: CorporateSubAccountIpDissociatePutRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    corporateSubAccountKeyPost(createApiKeyRequest: CreateApiKeyRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateApiKeyResponse;
    }>;
    corporateSubAccountPost(subAccountCreate: CreateSubAccount, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateSubAccountResponse;
    }>;
    corporateSubAccountSsoTokenPost(ssoTokenRequest: SsoTokenRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetSsoToken;
    }>;
    corporateUserInvitationActionEmailPut(action: string, email: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CorporateUserInvitationActionEmailPut200Response;
    }>;
    corporateUserRevokeEmailDelete(email: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getAccountActivity(startDate?: string, endDate?: string, limit?: number, offset?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetAccountActivity;
    }>;
    getCorporateInvitedUsersList(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetCorporateInvitedUsersList;
    }>;
    getCorporateUserPermission(email: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetCorporateUserPermission;
    }>;
    getSubAccountGroups(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<GetSubAccountGroups200ResponseInner>;
    }>;
    inviteAdminUser(sendInvitation: InviteAdminUser, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: InviteAdminUser;
    }>;
}
