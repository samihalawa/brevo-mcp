import { ConversionSourceProduct } from './conversionSourceProduct';
export declare class EcommerceAttributionProductsConversionSourceConversionSourceIdGet200Response {
    'products': Array<ConversionSourceProduct>;
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
