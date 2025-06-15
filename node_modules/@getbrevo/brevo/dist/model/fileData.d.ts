export declare class FileData {
    'name'?: string;
    'authorId'?: string;
    'contactId'?: number;
    'dealId'?: string;
    'companyId'?: string;
    'size'?: number;
    'createdAt'?: Date;
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
