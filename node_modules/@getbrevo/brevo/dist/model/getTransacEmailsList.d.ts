import { GetTransacEmailsListTransactionalEmailsInner } from './getTransacEmailsListTransactionalEmailsInner';
export declare class GetTransacEmailsList {
    'count'?: number;
    'transactionalEmails'?: Array<GetTransacEmailsListTransactionalEmailsInner>;
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
