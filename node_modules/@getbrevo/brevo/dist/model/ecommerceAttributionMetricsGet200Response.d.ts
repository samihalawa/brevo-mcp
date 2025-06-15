import { ConversionSourceMetrics } from './conversionSourceMetrics';
import { EcommerceAttributionMetricsGet200ResponseTotals } from './ecommerceAttributionMetricsGet200ResponseTotals';
export declare class EcommerceAttributionMetricsGet200Response {
    'results': Array<ConversionSourceMetrics>;
    'totals': EcommerceAttributionMetricsGet200ResponseTotals;
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
