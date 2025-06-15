export declare class EcommerceAttributionMetricsGet200ResponseTotals {
    'ordersCount': number;
    'revenue': number;
    'averageBasket': number;
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
