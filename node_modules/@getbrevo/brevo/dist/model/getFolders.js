"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFolders = void 0;
class GetFolders {
    static getAttributeTypeMap() {
        return GetFolders.attributeTypeMap;
    }
}
exports.GetFolders = GetFolders;
GetFolders.discriminator = undefined;
GetFolders.attributeTypeMap = [
    {
        "name": "folders",
        "baseName": "folders",
        "type": "Array<GetFolder>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
//# sourceMappingURL=getFolders.js.map