"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSendersListSendersInner = void 0;
class GetSendersListSendersInner {
    static getAttributeTypeMap() {
        return GetSendersListSendersInner.attributeTypeMap;
    }
}
exports.GetSendersListSendersInner = GetSendersListSendersInner;
GetSendersListSendersInner.discriminator = undefined;
GetSendersListSendersInner.attributeTypeMap = [
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
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "active",
        "baseName": "active",
        "type": "boolean"
    },
    {
        "name": "ips",
        "baseName": "ips",
        "type": "Array<GetSendersListSendersInnerIpsInner>"
    }
];
//# sourceMappingURL=getSendersListSendersInner.js.map