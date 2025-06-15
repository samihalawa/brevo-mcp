"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionSourceProduct = void 0;
class ConversionSourceProduct {
    static getAttributeTypeMap() {
        return ConversionSourceProduct.attributeTypeMap;
    }
}
exports.ConversionSourceProduct = ConversionSourceProduct;
ConversionSourceProduct.discriminator = undefined;
ConversionSourceProduct.attributeTypeMap = [
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
        "name": "sku",
        "baseName": "sku",
        "type": "string"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "number"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "imageUrl",
        "baseName": "imageUrl",
        "type": "string"
    },
    {
        "name": "ordersCount",
        "baseName": "ordersCount",
        "type": "number"
    },
    {
        "name": "revenue",
        "baseName": "revenue",
        "type": "number"
    }
];
//# sourceMappingURL=conversionSourceProduct.js.map