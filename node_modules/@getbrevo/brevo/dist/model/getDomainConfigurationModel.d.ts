import { CreateDomainModelDnsRecords } from './createDomainModelDnsRecords';
export declare class GetDomainConfigurationModel {
    'domain': string;
    'verified': boolean;
    'authenticated': boolean;
    'dnsRecords': CreateDomainModelDnsRecords;
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
