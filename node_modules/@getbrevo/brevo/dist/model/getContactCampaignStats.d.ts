import { GetContactCampaignStatsClickedInner } from './getContactCampaignStatsClickedInner';
import { GetContactCampaignStatsMessagesSentInner } from './getContactCampaignStatsMessagesSentInner';
import { GetContactCampaignStatsOpenedInner } from './getContactCampaignStatsOpenedInner';
import { GetContactCampaignStatsTransacAttributesInner } from './getContactCampaignStatsTransacAttributesInner';
import { GetContactCampaignStatsUnsubscriptions } from './getContactCampaignStatsUnsubscriptions';
export declare class GetContactCampaignStats {
    'messagesSent'?: Array<GetContactCampaignStatsMessagesSentInner>;
    'hardBounces'?: Array<GetContactCampaignStatsMessagesSentInner>;
    'softBounces'?: Array<GetContactCampaignStatsMessagesSentInner>;
    'complaints'?: Array<GetContactCampaignStatsMessagesSentInner>;
    'unsubscriptions'?: GetContactCampaignStatsUnsubscriptions;
    'opened'?: Array<GetContactCampaignStatsOpenedInner>;
    'clicked'?: Array<GetContactCampaignStatsClickedInner>;
    'transacAttributes'?: Array<GetContactCampaignStatsTransacAttributesInner>;
    'delivered'?: Array<GetContactCampaignStatsMessagesSentInner>;
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
