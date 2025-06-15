import { MasterDetailsResponseBillingInfo } from './masterDetailsResponseBillingInfo';
import { MasterDetailsResponsePlanInfo } from './masterDetailsResponsePlanInfo';
export declare class MasterDetailsResponse {
    'email'?: string;
    'companyName'?: string;
    'id'?: number;
    'currencyCode'?: string;
    'timezone'?: string;
    'billingInfo'?: MasterDetailsResponseBillingInfo;
    'planInfo'?: MasterDetailsResponsePlanInfo;
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
