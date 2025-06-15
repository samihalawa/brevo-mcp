export declare class UpdateCouponCollectionRequest {
    'defaultCoupon'?: string;
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
