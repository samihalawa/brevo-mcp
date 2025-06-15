import { RequestContactImportJsonBodyInner } from './requestContactImportJsonBodyInner';
import { RequestContactImportNewList } from './requestContactImportNewList';
export declare class RequestContactImport {
    'fileUrl'?: string;
    'fileBody'?: string;
    'jsonBody'?: Array<RequestContactImportJsonBodyInner>;
    'listIds'?: Array<number>;
    'notifyUrl'?: string;
    'newList'?: RequestContactImportNewList;
    'emailBlacklist'?: boolean;
    'disableNotification'?: boolean;
    'smsBlacklist'?: boolean;
    'updateExistingContacts'?: boolean;
    'emptyContactsAttributes'?: boolean;
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
