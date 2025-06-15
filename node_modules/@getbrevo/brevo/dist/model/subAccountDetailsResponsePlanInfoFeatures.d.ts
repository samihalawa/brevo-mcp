import { SubAccountDetailsResponsePlanInfoFeaturesInbox } from './subAccountDetailsResponsePlanInfoFeaturesInbox';
import { SubAccountDetailsResponsePlanInfoFeaturesLandingPage } from './subAccountDetailsResponsePlanInfoFeaturesLandingPage';
import { SubAccountDetailsResponsePlanInfoFeaturesUsers } from './subAccountDetailsResponsePlanInfoFeaturesUsers';
export declare class SubAccountDetailsResponsePlanInfoFeatures {
    'inbox'?: SubAccountDetailsResponsePlanInfoFeaturesInbox;
    'landingPage'?: SubAccountDetailsResponsePlanInfoFeaturesLandingPage;
    'users'?: SubAccountDetailsResponsePlanInfoFeaturesUsers;
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
