import { UpdateBatchContactsContactsInner } from './updateBatchContactsContactsInner';
export declare class UpdateBatchContacts {
    'contacts'?: Array<UpdateBatchContactsContactsInner>;
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
