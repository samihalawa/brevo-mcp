#!/usr/bin/env node
export interface BrevoContact {
    email?: string;
    id?: number;
    emailBlacklisted?: boolean;
    smsBlacklisted?: boolean;
    listIds?: number[];
    attributes?: Record<string, any>;
}
export interface EmailOptions {
    to: {
        email: string;
        name?: string;
    }[];
    subject: string;
    htmlContent: string;
    sender?: {
        name: string;
        email: string;
    };
}
export interface ContactAttribute {
    name: string;
    category: string;
    type: string;
    value?: string;
}
export declare class BrevoAPI {
    private apiKey;
    private defaultSender;
    private baseUrl;
    constructor(apiKey: string, defaultSenderEmail: string, defaultSenderName?: string);
    private makeRequest;
    getContact(identifier: string | number): Promise<BrevoContact>;
    updateContact(id: number, data: Partial<BrevoContact>): Promise<void>;
    createAttribute(name: string, type?: 'text' | 'date' | 'float' | 'boolean'): Promise<void>;
    getAttributes(): Promise<ContactAttribute[]>;
    sendEmail(options: EmailOptions): Promise<{
        messageId: string;
    }>;
    getEmailEvents(messageId?: string, email?: string): Promise<any[]>;
    getSenders(): Promise<unknown>;
    static getDefaultTemplate(title: string, content: string, accentColor?: string): string;
    static formatEmailSignature(name: string, title?: string, extra?: string): string;
}
export default BrevoAPI;
