import { GetContactCampaignStatsClickedInnerLinksInner } from './getContactCampaignStatsClickedInnerLinksInner';
export declare class GetContactCampaignStatsClickedInner {
    'campaignId': number;
    'links': Array<GetContactCampaignStatsClickedInnerLinksInner>;
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
