export declare class Note {
    'id'?: string;
    'text': string;
    'contactIds'?: Array<number>;
    'dealIds'?: Array<string>;
    'authorId'?: object;
    'createdAt'?: Date;
    'updatedAt'?: Date;
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
