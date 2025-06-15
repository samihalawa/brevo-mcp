export declare class GetCategoryDetails {
    'id': string;
    'name': string;
    'createdAt': string;
    'modifiedAt': string;
    'url'?: string;
    'isDeleted'?: boolean;
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
