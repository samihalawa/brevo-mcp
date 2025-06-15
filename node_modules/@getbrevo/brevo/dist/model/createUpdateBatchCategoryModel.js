"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpdateBatchCategoryModel = void 0;
class CreateUpdateBatchCategoryModel {
    static getAttributeTypeMap() {
        return CreateUpdateBatchCategoryModel.attributeTypeMap;
    }
}
exports.CreateUpdateBatchCategoryModel = CreateUpdateBatchCategoryModel;
CreateUpdateBatchCategoryModel.discriminator = undefined;
CreateUpdateBatchCategoryModel.attributeTypeMap = [
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
//# sourceMappingURL=createUpdateBatchCategoryModel.js.map