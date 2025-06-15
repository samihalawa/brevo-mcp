"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestContactImportNewList = void 0;
class RequestContactImportNewList {
    static getAttributeTypeMap() {
        return RequestContactImportNewList.attributeTypeMap;
    }
}
exports.RequestContactImportNewList = RequestContactImportNewList;
RequestContactImportNewList.discriminator = undefined;
RequestContactImportNewList.attributeTypeMap = [
    {
        "name": "listName",
        "baseName": "listName",
        "type": "string"
    },
    {
        "name": "folderId",
        "baseName": "folderId",
        "type": "number"
    }
];
//# sourceMappingURL=requestContactImportNewList.js.map