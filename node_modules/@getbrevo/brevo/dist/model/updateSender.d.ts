import { CreateSenderIpsInner } from './createSenderIpsInner';
export declare class UpdateSender {
    'name'?: string;
    'email'?: string;
    'ips'?: Array<CreateSenderIpsInner>;
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
