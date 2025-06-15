export declare class NoteData {
    'text': string;
    'contactIds'?: Array<number>;
    'dealIds'?: Array<string>;
    'companyIds'?: Array<string>;
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
