export declare class GetDomainsListDomainsInner {
    'id': number;
    'domainName': string;
    'authenticated': boolean;
    'verified': boolean;
    'ip'?: string;
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
