export declare class OrderProductsInner {
    'productId': string;
    'quantity': number;
    'variantId'?: string;
    'price': number;
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
