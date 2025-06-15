import { SubAccountsResponseSubAccountsInner } from './subAccountsResponseSubAccountsInner';
export declare class SubAccountsResponse {
    'count'?: number;
    'subAccounts'?: Array<SubAccountsResponseSubAccountsInner>;
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
