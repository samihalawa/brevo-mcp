"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductsInner = void 0;
class OrderProductsInner {
    static getAttributeTypeMap() {
        return OrderProductsInner.attributeTypeMap;
    }
}
exports.OrderProductsInner = OrderProductsInner;
OrderProductsInner.discriminator = undefined;
OrderProductsInner.attributeTypeMap = [
    {
        "name": "productId",
        "baseName": "productId",
        "type": "string"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "variantId",
        "baseName": "variantId",
        "type": "string"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "number"
    }
];
//# sourceMappingURL=orderProductsInner.js.map