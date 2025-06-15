"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategoryDetails = void 0;
class GetCategoryDetails {
    static getAttributeTypeMap() {
        return GetCategoryDetails.attributeTypeMap;
    }
}
exports.GetCategoryDetails = GetCategoryDetails;
GetCategoryDetails.discriminator = undefined;
GetCategoryDetails.attributeTypeMap = [
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
        "name": "isDeleted",
        "baseName": "isDeleted",
        "type": "boolean"
    }
];
//# sourceMappingURL=getCategoryDetails.js.map