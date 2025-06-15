import { UpdateAttributeEnumerationInner } from './updateAttributeEnumerationInner';
export declare class UpdateAttribute {
    'value'?: string;
    'enumeration'?: Array<UpdateAttributeEnumerationInner>;
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
