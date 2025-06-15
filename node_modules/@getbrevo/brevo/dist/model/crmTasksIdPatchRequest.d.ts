export declare class CrmTasksIdPatchRequest {
    'name'?: string;
    'duration'?: number;
    'taskTypeId'?: string;
    'date'?: Date;
    'notes'?: string;
    'done'?: boolean;
    'assignToId'?: string;
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
