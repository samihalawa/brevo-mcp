import { GetAttributesAttributesInner } from './getAttributesAttributesInner';
export declare class GetAttributes {
    'attributes': Array<GetAttributesAttributesInner>;
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
