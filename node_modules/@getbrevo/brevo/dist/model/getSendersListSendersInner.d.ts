import { GetSendersListSendersInnerIpsInner } from './getSendersListSendersInnerIpsInner';
export declare class GetSendersListSendersInner {
    'id': number;
    'name': string;
    'email': string;
    'active': boolean;
    'ips'?: Array<GetSendersListSendersInnerIpsInner>;
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
