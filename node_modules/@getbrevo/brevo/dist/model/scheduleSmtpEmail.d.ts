export declare class ScheduleSmtpEmail {
    'messageId'?: string;
    'messageIds'?: Array<string>;
    'batchId'?: string;
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
