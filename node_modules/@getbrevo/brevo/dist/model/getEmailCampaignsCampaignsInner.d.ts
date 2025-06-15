import { GetCampaignRecipients } from './getCampaignRecipients';
import { GetExtendedCampaignOverviewAllOfSender } from './getExtendedCampaignOverviewAllOfSender';
import { GetExtendedCampaignStats } from './getExtendedCampaignStats';
export declare class GetEmailCampaignsCampaignsInner {
    'id': number;
    'name': string;
    'subject'?: string;
    'previewText'?: string;
    'type': GetEmailCampaignsCampaignsInner.TypeEnum;
    'status': GetEmailCampaignsCampaignsInner.StatusEnum;
    'scheduledAt'?: string;
    'abTesting'?: boolean;
    'subjectA'?: string;
    'subjectB'?: string;
    'splitRule'?: number;
    'winnerCriteria'?: string;
    'winnerDelay'?: number;
    'sendAtBestTime'?: boolean;
    'utmCampaignValue'?: string;
    'utmSource'?: string;
    'utmMedium'?: string;
    'utmID'?: number;
    'testSent': boolean;
    'header': string;
    'footer': string;
    'sender': GetExtendedCampaignOverviewAllOfSender;
    'replyTo': string;
    'toField'?: string;
    'htmlContent': string;
    'shareLink'?: string;
    'tag'?: string;
    'createdAt': string;
    'modifiedAt': string;
    'inlineImageActivation'?: boolean;
    'mirrorActive'?: boolean;
    'recurring'?: boolean;
    'sentDate'?: string;
    'returnBounce'?: number;
    'recipients': GetCampaignRecipients;
    'statistics': GetExtendedCampaignStats;
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
export declare namespace GetEmailCampaignsCampaignsInner {
    enum TypeEnum {
        Classic,
        Trigger
    }
    enum StatusEnum {
        Draft,
        Sent,
        Archive,
        Queued,
        Suspended,
        InProcess
    }
}
