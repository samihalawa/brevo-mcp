export declare class GetWATemplatesTemplatesInner {
    'id': string;
    'name': string;
    'status': string;
    'language': string;
    'category': string;
    'errorReason'?: string;
    'createdAt': string;
    'modifiedAt': string;
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
