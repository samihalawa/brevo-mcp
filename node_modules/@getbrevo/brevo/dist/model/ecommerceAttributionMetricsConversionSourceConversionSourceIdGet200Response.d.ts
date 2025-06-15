export declare class EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response {
    'id': number;
    'conversionSource': EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response.ConversionSourceEnum;
    'ordersCount': number;
    'revenue': number;
    'averageBasket': number;
    'newCustomersCount': number;
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
export declare namespace EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response {
    enum ConversionSourceEnum {
        EmailCampaign
    }
}
