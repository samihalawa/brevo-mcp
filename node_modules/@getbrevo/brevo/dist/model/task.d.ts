export declare class Task {
    'id'?: string;
    'taskTypeId': string;
    'name': string;
    'contactsIds'?: Array<number>;
    'dealsIds'?: Array<string>;
    'companiesIds'?: Array<string>;
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
