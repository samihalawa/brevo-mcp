import { WhatsappCampStats } from './whatsappCampStats';
import { WhatsappCampTemplate } from './whatsappCampTemplate';
export declare class GetWhatsappCampaignOverview {
    'id': number;
    'campaignName': string;
    'campaignStatus': GetWhatsappCampaignOverview.CampaignStatusEnum;
    'scheduledAt'?: string;
    'senderNumber': string;
    'stats'?: WhatsappCampStats;
    'template': WhatsappCampTemplate;
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
export declare namespace GetWhatsappCampaignOverview {
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
