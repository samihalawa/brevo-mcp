"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChildrenListChildrenInner = void 0;
class GetChildrenListChildrenInner {
    static getAttributeTypeMap() {
        return GetChildrenListChildrenInner.attributeTypeMap;
    }
}
exports.GetChildrenListChildrenInner = GetChildrenListChildrenInner;
GetChildrenListChildrenInner.discriminator = undefined;
GetChildrenListChildrenInner.attributeTypeMap = [
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
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
//# sourceMappingURL=getChildrenListChildrenInner.js.map