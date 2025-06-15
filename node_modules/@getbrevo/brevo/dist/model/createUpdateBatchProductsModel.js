"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpdateBatchProductsModel = void 0;
class CreateUpdateBatchProductsModel {
    static getAttributeTypeMap() {
        return CreateUpdateBatchProductsModel.attributeTypeMap;
    }
}
exports.CreateUpdateBatchProductsModel = CreateUpdateBatchProductsModel;
CreateUpdateBatchProductsModel.discriminator = undefined;
CreateUpdateBatchProductsModel.attributeTypeMap = [
    {
        "name": "createdCount",
        "baseName": "createdCount",
        "type": "number"
    },
    {
        "name": "updatedCount",
        "baseName": "updatedCount",
        "type": "number"
    }
];
//# sourceMappingURL=createUpdateBatchProductsModel.js.map