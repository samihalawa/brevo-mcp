"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCouponCollection = void 0;
class GetCouponCollection {
    static getAttributeTypeMap() {
        return GetCouponCollection.attributeTypeMap;
    }
}
exports.GetCouponCollection = GetCouponCollection;
GetCouponCollection.discriminator = undefined;
GetCouponCollection.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "defaultCoupon",
        "baseName": "defaultCoupon",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "totalCoupons",
        "baseName": "totalCoupons",
        "type": "number"
    },
    {
        "name": "remainingCoupons",
        "baseName": "remainingCoupons",
        "type": "number"
    },
    {
        "name": "expirationDate",
        "baseName": "expirationDate",
        "type": "Date"
    },
    {
        "name": "remainingDaysAlert",
        "baseName": "remainingDaysAlert",
        "type": "number"
    },
    {
        "name": "remainingCouponsAlert",
        "baseName": "remainingCouponsAlert",
        "type": "number"
    }
];
//# sourceMappingURL=getCouponCollection.js.map