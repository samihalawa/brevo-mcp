export declare class GetCouponCollection {
    'id': string;
    'name': string;
    'defaultCoupon': string;
    'createdAt': Date;
    'totalCoupons': number;
    'remainingCoupons': number;
    'expirationDate'?: Date;
    'remainingDaysAlert'?: number;
    'remainingCouponsAlert'?: number;
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
