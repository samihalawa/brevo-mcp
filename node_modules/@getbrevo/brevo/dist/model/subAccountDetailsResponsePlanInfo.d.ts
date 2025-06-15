import { SubAccountDetailsResponsePlanInfoCredits } from './subAccountDetailsResponsePlanInfoCredits';
import { SubAccountDetailsResponsePlanInfoFeatures } from './subAccountDetailsResponsePlanInfoFeatures';
export declare class SubAccountDetailsResponsePlanInfo {
    'credits'?: SubAccountDetailsResponsePlanInfoCredits;
    'features'?: SubAccountDetailsResponsePlanInfoFeatures;
    'planType'?: string;
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
