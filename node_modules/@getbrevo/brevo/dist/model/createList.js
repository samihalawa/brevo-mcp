"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateList = void 0;
class CreateList {
    static getAttributeTypeMap() {
        return CreateList.attributeTypeMap;
    }
}
exports.CreateList = CreateList;
CreateList.discriminator = undefined;
CreateList.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "folderId",
        "baseName": "folderId",
        "type": "number"
    }
];
//# sourceMappingURL=createList.js.map