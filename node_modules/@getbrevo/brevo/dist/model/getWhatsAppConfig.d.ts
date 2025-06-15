export declare class GetWhatsAppConfig {
    'whatsappBusinessAccountId'?: string;
    'sendingLimit'?: string;
    'phoneNumberQuality'?: GetWhatsAppConfig.PhoneNumberQualityEnum;
    'whatsappBusinessAccountStatus'?: string;
    'businessStatus'?: string;
    'phoneNumberNameStatus'?: GetWhatsAppConfig.PhoneNumberNameStatusEnum;
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
export declare namespace GetWhatsAppConfig {
    enum PhoneNumberQualityEnum {
        Green,
        Yellow,
        Red
    }
    enum PhoneNumberNameStatusEnum {
        Approved,
        Pending,
        Rejected
    }
}
