export declare class Company {
    'id'?: string;
    'attributes'?: object;
    'linkedContactsIds'?: Array<number>;
    'linkedDealsIds'?: Array<string>;
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
