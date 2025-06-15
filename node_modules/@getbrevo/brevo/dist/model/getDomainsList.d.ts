import { GetDomainsListDomainsInner } from './getDomainsListDomainsInner';
export declare class GetDomainsList {
    'domains'?: Array<GetDomainsListDomainsInner>;
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
