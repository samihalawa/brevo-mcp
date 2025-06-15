import { GetWATemplatesTemplatesInner } from './getWATemplatesTemplatesInner';
export declare class GetWATemplates {
    'templates': Array<GetWATemplatesTemplatesInner>;
    'count': number;
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
