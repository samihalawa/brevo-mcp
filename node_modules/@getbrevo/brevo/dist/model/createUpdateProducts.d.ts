export declare class CreateUpdateProducts {
    'id': string;
    'name': string;
    'url'?: string;
    'imageUrl'?: string;
    'sku'?: string;
    'price'?: number;
    'categories'?: Array<string>;
    'parentId'?: string;
    'metaInfo'?: {
        [key: string]: string;
    };
    'deletedAt'?: string;
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
