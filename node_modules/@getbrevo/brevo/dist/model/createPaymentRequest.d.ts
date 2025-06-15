import { Cart } from './cart';
import { Configuration } from './configuration';
import { Notification } from './notification';
export declare class CreatePaymentRequest {
    'reference': string;
    'cart': Cart;
    'contactId': number;
    'description'?: string;
    'notification'?: Notification;
    'configuration'?: Configuration;
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
