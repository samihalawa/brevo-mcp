import { CreateDomainModelDnsRecordsDkimRecord } from './createDomainModelDnsRecordsDkimRecord';
export declare class CreateDomainModelDnsRecords {
    'dkimRecord'?: CreateDomainModelDnsRecordsDkimRecord;
    'brevoCode'?: CreateDomainModelDnsRecordsDkimRecord;
    'dmarcRecord'?: CreateDomainModelDnsRecordsDkimRecord;
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
