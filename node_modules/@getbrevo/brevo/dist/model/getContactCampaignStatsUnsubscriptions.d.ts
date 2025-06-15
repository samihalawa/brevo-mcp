import { GetContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner } from './getContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner';
import { GetContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner } from './getContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner';
export declare class GetContactCampaignStatsUnsubscriptions {
    'userUnsubscription': Array<GetContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner>;
    'adminUnsubscription': Array<GetContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner>;
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
