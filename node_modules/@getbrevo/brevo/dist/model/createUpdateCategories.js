"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpdateCategories = void 0;
class CreateUpdateCategories {
    static getAttributeTypeMap() {
        return CreateUpdateCategories.attributeTypeMap;
    }
}
exports.CreateUpdateCategories = CreateUpdateCategories;
CreateUpdateCategories.discriminator = undefined;
CreateUpdateCategories.attributeTypeMap = [
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
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "deletedAt",
        "baseName": "deletedAt",
        "type": "string"
    },
    {
        "name": "isDeleted",
        "baseName": "isDeleted",
        "type": "boolean"
    }
];
//# sourceMappingURL=createUpdateCategories.js.map