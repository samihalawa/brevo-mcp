import { GetOrdersOrdersInner } from './getOrdersOrdersInner';
export declare class GetOrders {
    'orders'?: Array<GetOrdersOrdersInner>;
    'count'?: number;
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
