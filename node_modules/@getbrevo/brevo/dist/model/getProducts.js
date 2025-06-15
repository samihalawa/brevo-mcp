"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProducts = void 0;
class GetProducts {
    static getAttributeTypeMap() {
        return GetProducts.attributeTypeMap;
    }
}
exports.GetProducts = GetProducts;
GetProducts.discriminator = undefined;
GetProducts.attributeTypeMap = [
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<GetProductDetails>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
//# sourceMappingURL=getProducts.js.map