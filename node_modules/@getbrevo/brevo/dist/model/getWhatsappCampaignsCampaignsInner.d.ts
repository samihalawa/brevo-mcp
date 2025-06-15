import { WhatsappCampStats } from './whatsappCampStats';
export declare class GetWhatsappCampaignsCampaignsInner {
    'id': number;
    'campaignName': string;
    'templateId': string;
    'campaignStatus': GetWhatsappCampaignsCampaignsInner.CampaignStatusEnum;
    'scheduledAt': string;
    'errorReason'?: string;
    'invalidatedContacts'?: number;
    'readPercentage'?: number;
    'stats'?: WhatsappCampStats;
    'createdAt': string;
    'modifiedAt': string;
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
export declare namespace GetWhatsappCampaignsCampaignsInner {
    enum CampaignStatusEnum {
        Draft,
        Scheduled,
        Pending,
        Approved,
        Running,
        Suspended,
        Rejected,
        Sent
    }
}
