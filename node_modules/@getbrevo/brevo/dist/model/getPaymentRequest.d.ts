import { Cart } from './cart';
import { Configuration } from './configuration';
import { Notification } from './notification';
export declare class GetPaymentRequest {
    'reference': string;
    'status': GetPaymentRequest.StatusEnum;
    'configuration'?: Configuration;
    'contactId'?: number;
    'numberOfRemindersSent'?: number;
    'cart': Cart;
    'notification': Notification;
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
export declare namespace GetPaymentRequest {
    enum StatusEnum {
        Created,
        Sent,
        ReminderSentPaid
    }
}
