export declare class SsoTokenRequest {
    'id': number;
    'email'?: string;
    'target'?: SsoTokenRequest.TargetEnum;
    'url'?: string;
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
export declare namespace SsoTokenRequest {
    enum TargetEnum {
        Automation,
        EmailCampaign,
        Contacts,
        LandingPages,
        EmailTransactional,
        Senders,
        SmsCampaign,
        SmsTransactional
    }
}
