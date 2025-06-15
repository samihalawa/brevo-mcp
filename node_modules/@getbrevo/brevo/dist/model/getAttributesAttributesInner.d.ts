import { GetAttributesAttributesInnerEnumerationInner } from './getAttributesAttributesInnerEnumerationInner';
export declare class GetAttributesAttributesInner {
    'name': string;
    'category': GetAttributesAttributesInner.CategoryEnum;
    'type'?: GetAttributesAttributesInner.TypeEnum;
    'enumeration'?: Array<GetAttributesAttributesInnerEnumerationInner>;
    'calculatedValue'?: string;
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
export declare namespace GetAttributesAttributesInner {
    enum CategoryEnum {
        Normal,
        Transactional,
        Category,
        Calculated,
        Global
    }
    enum TypeEnum {
        Text,
        Date,
        Float,
        Id,
        Boolean
    }
}
