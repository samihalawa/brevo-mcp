import { CreateDomainModelDnsRecords } from './createDomainModelDnsRecords';
export declare class CreateDomainModel {
    'id': number;
    'domainName'?: string;
    'domainProvider'?: string;
    'message'?: string;
    'dnsRecords'?: CreateDomainModelDnsRecords;
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
