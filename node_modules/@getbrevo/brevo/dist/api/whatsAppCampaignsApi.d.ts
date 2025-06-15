/// <reference types="node" />
import http from 'http';
import { CreateModel } from '../model/createModel';
import { CreateWhatsAppCampaign } from '../model/createWhatsAppCampaign';
import { CreateWhatsAppTemplate } from '../model/createWhatsAppTemplate';
import { GetWATemplates } from '../model/getWATemplates';
import { GetWhatsAppConfig } from '../model/getWhatsAppConfig';
import { GetWhatsappCampaignOverview } from '../model/getWhatsappCampaignOverview';
import { GetWhatsappCampaigns } from '../model/getWhatsappCampaigns';
import { UpdateWhatsAppCampaign } from '../model/updateWhatsAppCampaign';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum WhatsAppCampaignsApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class WhatsAppCampaignsApi {
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
    setApiKey(key: WhatsAppCampaignsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    createWhatsAppCampaign(whatsAppCampaigns: CreateWhatsAppCampaign, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    createWhatsAppTemplate(whatsAppTemplates: CreateWhatsAppTemplate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CreateModel;
    }>;
    deleteWhatsAppCampaign(campaignId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    getWhatsAppCampaign(campaignId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWhatsappCampaignOverview;
    }>;
    getWhatsAppCampaigns(startDate?: string, endDate?: string, limit?: number, offset?: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWhatsappCampaigns;
    }>;
    getWhatsAppConfig(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWhatsAppConfig;
    }>;
    getWhatsAppTemplates(startDate?: string, endDate?: string, limit?: number, offset?: number, sort?: 'asc' | 'desc', source?: 'Automation' | 'Conversations', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: GetWATemplates;
    }>;
    sendWhatsAppTemplateApproval(templateId: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    updateWhatsAppCampaign(campaignId: number, whatsAppCampaign?: UpdateWhatsAppCampaign, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
