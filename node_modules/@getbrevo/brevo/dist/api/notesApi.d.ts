/// <reference types="node" />
import http from 'http';
import { Note } from '../model/note';
import { NoteData } from '../model/noteData';
import { NoteId } from '../model/noteId';
import { Authentication, Interceptor } from '../model/models';
import { ApiKeyAuth } from '../model/models';
export declare enum NotesApiApiKeys {
    apiKey = 0,
    partnerKey = 1
}
export declare class NotesApi {
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
    setApiKey(key: NotesApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    crmNotesGet(entity?: 'companies' | 'deals' | 'contacts', entityIds?: string, dateFrom?: number, dateTo?: number, offset?: number, limit?: number, sort?: 'asc' | 'desc', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Note>;
    }>;
    crmNotesIdDelete(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    crmNotesIdGet(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Note;
    }>;
    crmNotesIdPatch(id: string, body: NoteData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    crmNotesPost(body: NoteData, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NoteId;
    }>;
}
