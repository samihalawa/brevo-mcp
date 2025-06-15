"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductDetails = void 0;
class GetProductDetails {
    static getAttributeTypeMap() {
        return GetProductDetails.attributeTypeMap;
    }
}
exports.GetProductDetails = GetProductDetails;
GetProductDetails.discriminator = undefined;
GetProductDetails.attributeTypeMap = [
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
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
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
        "name": "s3Original",
        "baseName": "s3Original",
        "type": "string"
    },
    {
        "name": "s3ThumbAnalytics",
        "baseName": "s3ThumbAnalytics",
        "type": "string"
    },
    {
        "name": "metaInfo",
        "baseName": "metaInfo",
        "type": "object"
    },
    {
        "name": "s3ThumbEditor",
        "baseName": "s3ThumbEditor",
        "type": "string"
    },
    {
        "name": "isDeleted",
        "baseName": "isDeleted",
        "type": "boolean"
    }
];
//# sourceMappingURL=getProductDetails.js.map