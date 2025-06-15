export declare class ConversionSourceProduct {
    'id': string;
    'name'?: string;
    'sku'?: string;
    'price'?: number;
    'url'?: string;
    'imageUrl'?: string;
    'ordersCount'?: number;
    'revenue'?: number;
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
