"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpdateBatchProducts = void 0;
class CreateUpdateBatchProducts {
    static getAttributeTypeMap() {
        return CreateUpdateBatchProducts.attributeTypeMap;
    }
}
exports.CreateUpdateBatchProducts = CreateUpdateBatchProducts;
CreateUpdateBatchProducts.discriminator = undefined;
CreateUpdateBatchProducts.attributeTypeMap = [
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<CreateUpdateProducts>"
    },
    {
        "name": "updateEnabled",
        "baseName": "updateEnabled",
        "type": "boolean"
    }
];
//# sourceMappingURL=createUpdateBatchProducts.js.map