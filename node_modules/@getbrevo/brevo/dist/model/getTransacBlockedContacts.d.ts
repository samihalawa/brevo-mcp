import { GetTransacBlockedContactsContactsInner } from './getTransacBlockedContactsContactsInner';
export declare class GetTransacBlockedContacts {
    'count'?: number;
    'contacts'?: Array<GetTransacBlockedContactsContactsInner>;
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
