import { CreateWhatsAppCampaignRecipients } from './createWhatsAppCampaignRecipients';
export declare class UpdateWhatsAppCampaign {
    'campaignName'?: string;
    'campaignStatus'?: UpdateWhatsAppCampaign.CampaignStatusEnum;
    'rescheduleFor'?: string;
    'recipients'?: CreateWhatsAppCampaignRecipients;
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
export declare namespace UpdateWhatsAppCampaign {
    enum CampaignStatusEnum {
        Scheduled,
        Suspended
    }
}
