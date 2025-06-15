export declare class UpdateBatchContactsContactsInner {
    'email'?: string;
    'id'?: number;
    'sms'?: string;
    'extId'?: string;
    'attributes'?: {
        [key: string]: object;
    };
    'emailBlacklisted'?: boolean;
    'smsBlacklisted'?: boolean;
    'listIds'?: Array<number>;
    'unlinkListIds'?: Array<number>;
    'smtpBlacklistSender'?: Array<string>;
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
