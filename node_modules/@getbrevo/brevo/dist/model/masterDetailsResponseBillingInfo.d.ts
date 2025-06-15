import { MasterDetailsResponseBillingInfoAddress } from './masterDetailsResponseBillingInfoAddress';
import { MasterDetailsResponseBillingInfoName } from './masterDetailsResponseBillingInfoName';
export declare class MasterDetailsResponseBillingInfo {
    'email'?: string;
    'companyName'?: string;
    'name'?: MasterDetailsResponseBillingInfoName;
    'address'?: MasterDetailsResponseBillingInfoAddress;
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
