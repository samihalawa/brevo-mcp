"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    static getAttributeTypeMap() {
        return Order.attributeTypeMap;
    }
}
exports.Order = Order;
Order.discriminator = undefined;
Order.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=order.js.map