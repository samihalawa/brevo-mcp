import { ConversationsMessageFileImageInfo } from './conversationsMessageFileImageInfo';
export declare class ConversationsMessageFile {
    'filename'?: string;
    'size'?: number;
    'isImage'?: boolean;
    'url'?: string;
    'imageInfo'?: ConversationsMessageFileImageInfo;
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
