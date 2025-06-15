import { GetCampaignRecipients } from './getCampaignRecipients';
import { GetSmsCampaignStats } from './getSmsCampaignStats';
export declare class GetSmsCampaignsCampaignsInner {
    'id': number;
    'name': string;
    'status': GetSmsCampaignsCampaignsInner.StatusEnum;
    'content': string;
    'scheduledAt'?: string;
    'sender': string;
    'createdAt': string;
    'modifiedAt': string;
    'recipients': GetCampaignRecipients;
    'statistics': GetSmsCampaignStats;
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
export declare namespace GetSmsCampaignsCampaignsInner {
    enum StatusEnum {
        Draft,
        Sent,
        Archive,
        Queued,
        Suspended,
        InProcess
    }
}
