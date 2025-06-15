import { SubAccountUpdatePlanRequestCredits } from './subAccountUpdatePlanRequestCredits';
import { SubAccountUpdatePlanRequestFeatures } from './subAccountUpdatePlanRequestFeatures';
export declare class SubAccountUpdatePlanRequest {
    'credits'?: SubAccountUpdatePlanRequestCredits;
    'features'?: SubAccountUpdatePlanRequestFeatures;
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
