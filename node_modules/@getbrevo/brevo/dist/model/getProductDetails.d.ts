export declare class GetProductDetails {
    'id': string;
    'name': string;
    'createdAt': string;
    'modifiedAt': string;
    'url'?: string;
    'imageUrl'?: string;
    'sku'?: string;
    'price'?: number;
    'categories'?: Array<string>;
    'parentId'?: string;
    's3Original'?: string;
    's3ThumbAnalytics': string;
    'metaInfo'?: object;
    's3ThumbEditor': string;
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
