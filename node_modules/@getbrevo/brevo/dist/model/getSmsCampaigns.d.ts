import { GetSmsCampaignsCampaignsInner } from './getSmsCampaignsCampaignsInner';
export declare class GetSmsCampaigns {
    'campaigns'?: Array<GetSmsCampaignsCampaignsInner>;
    'count'?: number;
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
