export declare class GetAccountActivityLogsInner {
    'action': string;
    'date': string;
    'userEmail': string;
    'userIp': string;
    'userAgent': string;
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
