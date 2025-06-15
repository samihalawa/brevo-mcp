export declare class CompaniesLinkUnlinkIdPatchRequest {
    'linkContactIds'?: Array<number>;
    'unlinkContactIds'?: Array<number>;
    'linkDealsIds'?: Array<string>;
    'unlinkDealsIds'?: Array<string>;
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
