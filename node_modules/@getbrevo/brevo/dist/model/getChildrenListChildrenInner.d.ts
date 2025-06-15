import { GetChildInfoAllOfApiKeys } from './getChildInfoAllOfApiKeys';
import { GetChildInfoAllOfCredits } from './getChildInfoAllOfCredits';
import { GetChildInfoAllOfStatistics } from './getChildInfoAllOfStatistics';
export declare class GetChildrenListChildrenInner {
    'email': string;
    'firstName': string;
    'lastName': string;
    'companyName': string;
    'credits'?: GetChildInfoAllOfCredits;
    'statistics'?: GetChildInfoAllOfStatistics;
    'password': string;
    'ips'?: Array<string>;
    'apiKeys'?: GetChildInfoAllOfApiKeys;
    'id'?: number;
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
