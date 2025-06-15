import { OrderBilling } from './orderBilling';
import { OrderProductsInner } from './orderProductsInner';
export declare class GetOrdersOrdersInner {
    'id': string;
    'createdAt': string;
    'updatedAt': string;
    'status': string;
    'amount': number;
    'products': Array<OrderProductsInner>;
    'email'?: string;
    'billing'?: OrderBilling;
    'coupons'?: Array<string>;
    'contactId'?: number;
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
