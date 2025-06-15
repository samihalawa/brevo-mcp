import { CreateAttributeEnumerationInner } from './createAttributeEnumerationInner';
export declare class CreateAttribute {
    'value'?: string;
    'isRecurring'?: boolean;
    'enumeration'?: Array<CreateAttributeEnumerationInner>;
    'type'?: CreateAttribute.TypeEnum;
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
export declare namespace CreateAttribute {
    enum TypeEnum {
        Text,
        Date,
        Float,
        Boolean,
        Id,
        Category
    }
}
