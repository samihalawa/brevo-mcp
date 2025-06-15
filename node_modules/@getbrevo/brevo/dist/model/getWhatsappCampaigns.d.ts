import { GetWhatsappCampaignsCampaignsInner } from './getWhatsappCampaignsCampaignsInner';
export declare class GetWhatsappCampaigns {
    'campaigns'?: Array<GetWhatsappCampaignsCampaignsInner>;
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
