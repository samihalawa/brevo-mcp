"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLists = void 0;
class GetLists {
    static getAttributeTypeMap() {
        return GetLists.attributeTypeMap;
    }
}
exports.GetLists = GetLists;
GetLists.discriminator = undefined;
GetLists.attributeTypeMap = [
    {
        "name": "lists",
        "baseName": "lists",
        "type": "Array<GetListsListsInner>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
//# sourceMappingURL=getLists.js.map