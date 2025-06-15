export declare class CrmDealsPostRequest {
    'name': string;
    'attributes'?: object;
    'linkedContactsIds'?: Array<number>;
    'linkedCompaniesIds'?: Array<string>;
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
