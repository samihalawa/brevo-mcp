/// <reference types="node" />
import http from 'http';
import { CrmTasksIdPatchRequest } from '../model/crmTasksIdPatchRequest';
import { CrmTasksPost201Response } from '../model/crmTasksPost201Response';
import { CrmTasksPostRequest } from '../model/crmTasksPostRequest';
import { Task } from '../model/task';
import { TaskList } from '../model/taskList';
import { TaskTypes } from '../model/taskTypes';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum TasksApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class TasksApi {
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
    setApiKey(key: TasksApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    crmTasksGet(filterType?: string, filterStatus?: 'done' | 'undone', filterDate?: 'overdue' | 'today' | 'tomorrow' | 'week' | 'range', filterAssignTo?: string, filterContacts?: string, filterDeals?: string, filterCompanies?: string, dateFrom?: number, dateTo?: number, offset?: number, limit?: number, sort?: 'asc' | 'desc', sortBy?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TaskList;
    }>;
    crmTasksIdDelete(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    crmTasksIdGet(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Task;
    }>;
    crmTasksIdPatch(id: string, body: CrmTasksIdPatchRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    crmTasksPost(body: CrmTasksPostRequest, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: CrmTasksPost201Response;
    }>;
    crmTasktypesGet(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: TaskTypes;
    }>;
}
