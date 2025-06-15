export declare class CreateWhatsAppCampaignRecipients {
    'excludedListIds'?: Array<number>;
    'listIds'?: Array<number>;
    'segments'?: Array<number>;
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
