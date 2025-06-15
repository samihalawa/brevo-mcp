export declare class CreateUpdateCategory {
    'id': string;
    'name'?: string;
    'url'?: string;
    'updateEnabled'?: boolean;
    'deletedAt'?: string;
    'isDeleted'?: boolean;
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
