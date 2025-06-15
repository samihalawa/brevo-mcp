export declare class DealAttributesInner {
    'internalName'?: string;
    'label'?: string;
    'attributeTypeName'?: string;
    'attributeOptions'?: Array<object>;
    'isRequired'?: boolean;
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
