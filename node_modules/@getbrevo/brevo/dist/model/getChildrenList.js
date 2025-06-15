"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChildrenList = void 0;
class GetChildrenList {
    static getAttributeTypeMap() {
        return GetChildrenList.attributeTypeMap;
    }
}
exports.GetChildrenList = GetChildrenList;
GetChildrenList.discriminator = undefined;
GetChildrenList.attributeTypeMap = [
    {
        "name": "children",
        "baseName": "children",
        "type": "Array<GetChildrenListChildrenInner>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
//# sourceMappingURL=getChildrenList.js.map