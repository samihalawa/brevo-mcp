export declare class ConversationsPushedMessagesPostRequest {
    'visitorId': string;
    'text': string;
    'agentId'?: string;
    'groupId'?: string;
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
