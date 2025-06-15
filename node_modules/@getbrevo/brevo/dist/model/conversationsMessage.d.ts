import { ConversationsMessageFile } from './conversationsMessageFile';
export declare class ConversationsMessage {
    'id'?: string;
    'type'?: ConversationsMessage.TypeEnum;
    'text'?: string;
    'visitorId'?: string;
    'agentId'?: string;
    'agentName'?: string;
    'createdAt'?: number;
    'isPushed'?: boolean;
    'receivedFrom'?: string;
    'file'?: ConversationsMessageFile;
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
export declare namespace ConversationsMessage {
    enum TypeEnum {
        Agent,
        Visitor
    }
}
