export declare class CrmDealsLinkUnlinkIdPatchRequest {
    'linkContactIds'?: Array<number>;
    'unlinkContactIds'?: Array<number>;
    'linkCompanyIds'?: Array<string>;
    'unlinkCompanyIds'?: Array<string>;
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
