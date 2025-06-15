"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCategories = void 0;
class GetCategories {
    static getAttributeTypeMap() {
        return GetCategories.attributeTypeMap;
    }
}
exports.GetCategories = GetCategories;
GetCategories.discriminator = undefined;
GetCategories.attributeTypeMap = [
    {
        "name": "categories",
        "baseName": "categories",
        "type": "Array<GetCategoryDetails>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
//# sourceMappingURL=getCategories.js.map