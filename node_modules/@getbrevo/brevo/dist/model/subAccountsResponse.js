"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAccountsResponse = void 0;
class SubAccountsResponse {
    static getAttributeTypeMap() {
        return SubAccountsResponse.attributeTypeMap;
    }
}
exports.SubAccountsResponse = SubAccountsResponse;
SubAccountsResponse.discriminator = undefined;
SubAccountsResponse.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "subAccounts",
        "baseName": "subAccounts",
        "type": "Array<SubAccountsResponseSubAccountsInner>"
    }
];
//# sourceMappingURL=subAccountsResponse.js.map