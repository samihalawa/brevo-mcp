import { CorporateGroupDetailsResponseGroup } from './corporateGroupDetailsResponseGroup';
import { CorporateGroupDetailsResponseSubAccountsInner } from './corporateGroupDetailsResponseSubAccountsInner';
import { CorporateGroupDetailsResponseUsersInner } from './corporateGroupDetailsResponseUsersInner';
export declare class CorporateGroupDetailsResponse {
    'group'?: CorporateGroupDetailsResponseGroup;
    'subAccounts'?: Array<CorporateGroupDetailsResponseSubAccountsInner>;
    'users'?: Array<CorporateGroupDetailsResponseUsersInner>;
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
