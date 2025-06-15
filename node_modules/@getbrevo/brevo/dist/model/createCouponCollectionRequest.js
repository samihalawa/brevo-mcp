"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCouponCollectionRequest = void 0;
class CreateCouponCollectionRequest {
    static getAttributeTypeMap() {
        return CreateCouponCollectionRequest.attributeTypeMap;
    }
}
exports.CreateCouponCollectionRequest = CreateCouponCollectionRequest;
CreateCouponCollectionRequest.discriminator = undefined;
CreateCouponCollectionRequest.attributeTypeMap = [
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
//# sourceMappingURL=createCouponCollectionRequest.js.map