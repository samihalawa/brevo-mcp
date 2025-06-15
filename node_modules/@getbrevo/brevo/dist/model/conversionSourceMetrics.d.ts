export declare class ConversionSourceMetrics {
    'id': number;
    'conversionSource': ConversionSourceMetrics.ConversionSourceEnum;
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
export declare namespace ConversionSourceMetrics {
    enum ConversionSourceEnum {
        EmailCampaign
    }
}
