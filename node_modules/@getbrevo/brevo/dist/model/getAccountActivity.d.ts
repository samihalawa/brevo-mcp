import { GetAccountActivityLogsInner } from './getAccountActivityLogsInner';
export declare class GetAccountActivity {
    'logs'?: Array<GetAccountActivityLogsInner>;
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
