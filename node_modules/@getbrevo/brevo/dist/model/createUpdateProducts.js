"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpdateProducts = void 0;
class CreateUpdateProducts {
    static getAttributeTypeMap() {
        return CreateUpdateProducts.attributeTypeMap;
    }
}
exports.CreateUpdateProducts = CreateUpdateProducts;
CreateUpdateProducts.discriminator = undefined;
CreateUpdateProducts.attributeTypeMap = [
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
        "name": "imageUrl",
        "baseName": "imageUrl",
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
        "name": "categories",
        "baseName": "categories",
        "type": "Array<string>"
    },
    {
        "name": "parentId",
        "baseName": "parentId",
        "type": "string"
    },
    {
        "name": "metaInfo",
        "baseName": "metaInfo",
        "type": "{ [key: string]: string; }"
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
//# sourceMappingURL=createUpdateProducts.js.map