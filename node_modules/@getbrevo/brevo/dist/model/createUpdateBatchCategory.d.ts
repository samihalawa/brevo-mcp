import { CreateUpdateCategories } from './createUpdateCategories';
export declare class CreateUpdateBatchCategory {
    'categories': Array<CreateUpdateCategories>;
    'updateEnabled'?: boolean;
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
