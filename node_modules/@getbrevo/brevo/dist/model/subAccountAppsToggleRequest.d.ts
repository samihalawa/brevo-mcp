export declare class SubAccountAppsToggleRequest {
    'inbox'?: boolean;
    'whatsapp'?: boolean;
    'automation'?: boolean;
    'emailCampaigns'?: boolean;
    'smsCampaigns'?: boolean;
    'landingPages'?: boolean;
    'transactionalEmails'?: boolean;
    'transactionalSms'?: boolean;
    'facebookAds'?: boolean;
    'webPush'?: boolean;
    'meetings'?: boolean;
    'conversations'?: boolean;
    'crm'?: boolean;
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
