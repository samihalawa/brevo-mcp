"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrdersOrdersInner = void 0;
class GetOrdersOrdersInner {
    static getAttributeTypeMap() {
        return GetOrdersOrdersInner.attributeTypeMap;
    }
}
exports.GetOrdersOrdersInner = GetOrdersOrdersInner;
GetOrdersOrdersInner.discriminator = undefined;
GetOrdersOrdersInner.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<OrderProductsInner>"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "billing",
        "baseName": "billing",
        "type": "OrderBilling"
    },
    {
        "name": "coupons",
        "baseName": "coupons",
        "type": "Array<string>"
    },
    {
        "name": "contactId",
        "baseName": "contact_id",
        "type": "number"
    }
];
//# sourceMappingURL=getOrdersOrdersInner.js.map