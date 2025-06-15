"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCouponCollectionRequest = void 0;
class UpdateCouponCollectionRequest {
    static getAttributeTypeMap() {
        return UpdateCouponCollectionRequest.attributeTypeMap;
    }
}
exports.UpdateCouponCollectionRequest = UpdateCouponCollectionRequest;
UpdateCouponCollectionRequest.discriminator = undefined;
UpdateCouponCollectionRequest.attributeTypeMap = [
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
//# sourceMappingURL=updateCouponCollectionRequest.js.map