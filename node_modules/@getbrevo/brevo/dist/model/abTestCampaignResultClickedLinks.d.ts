import { AbTestVersionClicksInner } from './abTestVersionClicksInner';
export declare class AbTestCampaignResultClickedLinks {
    'versionA': Array<AbTestVersionClicksInner>;
    'versionB': Array<AbTestVersionClicksInner>;
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
