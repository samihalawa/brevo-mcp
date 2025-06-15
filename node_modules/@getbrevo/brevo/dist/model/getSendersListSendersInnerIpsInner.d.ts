export declare class GetSendersListSendersInnerIpsInner {
    'ip': string;
    'domain': string;
    'weight': number;
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
