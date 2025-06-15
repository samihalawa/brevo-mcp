import { Order } from './order';
export declare class OrderBatch {
    'orders': Array<Order>;
    'notifyUrl'?: string;
    'historical'?: boolean;
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
