"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetList = void 0;
class GetList {
    static getAttributeTypeMap() {
        return GetList.attributeTypeMap;
    }
}
exports.GetList = GetList;
GetList.discriminator = undefined;
GetList.attributeTypeMap = [
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
//# sourceMappingURL=getList.js.map