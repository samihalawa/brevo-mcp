import { GetTransacBlockedContactsContactsInnerReason } from './getTransacBlockedContactsContactsInnerReason';
export declare class GetTransacBlockedContactsContactsInner {
    'email': string;
    'senderEmail': string;
    'reason': GetTransacBlockedContactsContactsInnerReason;
    'blockedAt': string;
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
