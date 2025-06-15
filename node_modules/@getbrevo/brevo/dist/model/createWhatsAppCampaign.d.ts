import { CreateWhatsAppCampaignRecipients } from './createWhatsAppCampaignRecipients';
export declare class CreateWhatsAppCampaign {
    'name': string;
    'templateId': number;
    'scheduledAt': string;
    'recipients': CreateWhatsAppCampaignRecipients;
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
