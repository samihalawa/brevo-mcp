"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpdateBatchCategory = void 0;
class CreateUpdateBatchCategory {
    static getAttributeTypeMap() {
        return CreateUpdateBatchCategory.attributeTypeMap;
    }
}
exports.CreateUpdateBatchCategory = CreateUpdateBatchCategory;
CreateUpdateBatchCategory.discriminator = undefined;
CreateUpdateBatchCategory.attributeTypeMap = [
    {
        "name": "categories",
        "baseName": "categories",
        "type": "Array<CreateUpdateCategories>"
    },
    {
        "name": "updateEnabled",
        "baseName": "updateEnabled",
        "type": "boolean"
    }
];
//# sourceMappingURL=createUpdateBatchCategory.js.map