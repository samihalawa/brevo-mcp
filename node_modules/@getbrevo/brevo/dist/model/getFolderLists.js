"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFolderLists = void 0;
class GetFolderLists {
    static getAttributeTypeMap() {
        return GetFolderLists.attributeTypeMap;
    }
}
exports.GetFolderLists = GetFolderLists;
GetFolderLists.discriminator = undefined;
GetFolderLists.attributeTypeMap = [
    {
        "name": "lists",
        "baseName": "lists",
        "type": "Array<GetList>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
//# sourceMappingURL=getFolderLists.js.map