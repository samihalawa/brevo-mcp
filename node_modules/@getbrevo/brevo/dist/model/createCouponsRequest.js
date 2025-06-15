"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCouponsRequest = void 0;
class CreateCouponsRequest {
    static getAttributeTypeMap() {
        return CreateCouponsRequest.attributeTypeMap;
    }
}
exports.CreateCouponsRequest = CreateCouponsRequest;
CreateCouponsRequest.discriminator = undefined;
CreateCouponsRequest.attributeTypeMap = [
    {
        "name": "collectionId",
        "baseName": "collectionId",
        "type": "string"
    },
    {
        "name": "coupons",
        "baseName": "coupons",
        "type": "Set<string>"
    }
];
//# sourceMappingURL=createCouponsRequest.js.map