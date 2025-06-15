import { MasterDetailsResponsePlanInfoFeaturesInner } from './masterDetailsResponsePlanInfoFeaturesInner';
export declare class MasterDetailsResponsePlanInfo {
    'currencyCode'?: string;
    'nextBillingAt'?: number;
    'price'?: number;
    'planPeriod'?: MasterDetailsResponsePlanInfo.PlanPeriodEnum;
    'subAccounts'?: number;
    'features'?: Array<MasterDetailsResponsePlanInfoFeaturesInner>;
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
export declare namespace MasterDetailsResponsePlanInfo {
    enum PlanPeriodEnum {
        Month,
        Year
    }
}
