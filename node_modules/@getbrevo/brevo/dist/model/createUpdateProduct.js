"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpdateProduct = void 0;
class CreateUpdateProduct {
    constructor() {
        this['updateEnabled'] = false;
    }
    static getAttributeTypeMap() {
        return CreateUpdateProduct.attributeTypeMap;
    }
}
exports.CreateUpdateProduct = CreateUpdateProduct;
CreateUpdateProduct.discriminator = undefined;
CreateUpdateProduct.attributeTypeMap = [
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
        "name": "updateEnabled",
        "baseName": "updateEnabled",
        "type": "boolean"
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
//# sourceMappingURL=createUpdateProduct.js.map