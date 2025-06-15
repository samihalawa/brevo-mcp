"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateList = void 0;
class UpdateList {
    static getAttributeTypeMap() {
        return UpdateList.attributeTypeMap;
    }
}
exports.UpdateList = UpdateList;
UpdateList.discriminator = undefined;
UpdateList.attributeTypeMap = [
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
//# sourceMappingURL=updateList.js.map