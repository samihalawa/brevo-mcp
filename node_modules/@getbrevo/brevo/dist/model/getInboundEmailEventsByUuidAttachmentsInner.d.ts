export declare class GetInboundEmailEventsByUuidAttachmentsInner {
    'name'?: string;
    'contentType'?: string;
    'contentId'?: string;
    'contentLength'?: number;
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
