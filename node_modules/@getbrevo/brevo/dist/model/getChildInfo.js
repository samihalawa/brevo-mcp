"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChildInfo = void 0;
class GetChildInfo {
    static getAttributeTypeMap() {
        return GetChildInfo.attributeTypeMap;
    }
}
exports.GetChildInfo = GetChildInfo;
GetChildInfo.discriminator = undefined;
GetChildInfo.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "credits",
        "baseName": "credits",
        "type": "GetChildInfoAllOfCredits"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "GetChildInfoAllOfStatistics"
    },
    {
        "name": "password",
        "baseName": "password",
        "type": "string"
    },
    {
        "name": "ips",
        "baseName": "ips",
        "type": "Array<string>"
    },
    {
        "name": "apiKeys",
        "baseName": "apiKeys",
        "type": "GetChildInfoAllOfApiKeys"
    }
];
//# sourceMappingURL=getChildInfo.js.map