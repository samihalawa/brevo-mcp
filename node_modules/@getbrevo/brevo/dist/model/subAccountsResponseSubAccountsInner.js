"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAccountsResponseSubAccountsInner = void 0;
class SubAccountsResponseSubAccountsInner {
    static getAttributeTypeMap() {
        return SubAccountsResponseSubAccountsInner.attributeTypeMap;
    }
}
exports.SubAccountsResponseSubAccountsInner = SubAccountsResponseSubAccountsInner;
SubAccountsResponseSubAccountsInner.discriminator = undefined;
SubAccountsResponseSubAccountsInner.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "active",
        "baseName": "active",
        "type": "boolean"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "number"
    },
    {
        "name": "groups",
        "baseName": "groups",
        "type": "Array<SubAccountsResponseSubAccountsInnerGroupsInner>"
    }
];
//# sourceMappingURL=subAccountsResponseSubAccountsInner.js.map