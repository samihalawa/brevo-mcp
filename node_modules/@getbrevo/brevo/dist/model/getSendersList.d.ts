import { GetSendersListSendersInner } from './getSendersListSendersInner';
export declare class GetSendersList {
    'senders'?: Array<GetSendersListSendersInner>;
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
