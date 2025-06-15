export declare class ConversationsMessagesPostRequest {
    'visitorId': string;
    'text': string;
    'agentId'?: string;
    'receivedFrom'?: string;
    'agentEmail'?: string;
    'agentName'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
