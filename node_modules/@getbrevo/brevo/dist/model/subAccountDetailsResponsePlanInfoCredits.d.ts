import { SubAccountDetailsResponsePlanInfoCreditsEmails } from './subAccountDetailsResponsePlanInfoCreditsEmails';
import { SubAccountDetailsResponsePlanInfoCreditsSms } from './subAccountDetailsResponsePlanInfoCreditsSms';
import { SubAccountDetailsResponsePlanInfoCreditsWpSubscribers } from './subAccountDetailsResponsePlanInfoCreditsWpSubscribers';
export declare class SubAccountDetailsResponsePlanInfoCredits {
    'emails'?: SubAccountDetailsResponsePlanInfoCreditsEmails;
    'sms'?: SubAccountDetailsResponsePlanInfoCreditsSms;
    'wpSubscribers'?: SubAccountDetailsResponsePlanInfoCreditsWpSubscribers;
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
