export declare class CreateDomainModelDnsRecordsDkimRecord {
    'type'?: string;
    'value'?: string;
    'hostName'?: string;
    'status'?: boolean;
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
