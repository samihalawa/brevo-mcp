import { SubAccountDetailsResponseGroupsInner } from './subAccountDetailsResponseGroupsInner';
import { SubAccountDetailsResponsePlanInfo } from './subAccountDetailsResponsePlanInfo';
export declare class SubAccountDetailsResponse {
    'name'?: string;
    'email'?: string;
    'companyName'?: string;
    'groups'?: Array<SubAccountDetailsResponseGroupsInner>;
    'planInfo'?: SubAccountDetailsResponsePlanInfo;
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
