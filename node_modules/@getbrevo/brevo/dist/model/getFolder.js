"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFolder = void 0;
class GetFolder {
    static getAttributeTypeMap() {
        return GetFolder.attributeTypeMap;
    }
}
exports.GetFolder = GetFolder;
GetFolder.discriminator = undefined;
GetFolder.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "totalBlacklisted",
        "baseName": "totalBlacklisted",
        "type": "number"
    },
    {
        "name": "totalSubscribers",
        "baseName": "totalSubscribers",
        "type": "number"
    },
    {
        "name": "uniqueSubscribers",
        "baseName": "uniqueSubscribers",
        "type": "number"
    }
];
//# sourceMappingURL=getFolder.js.map