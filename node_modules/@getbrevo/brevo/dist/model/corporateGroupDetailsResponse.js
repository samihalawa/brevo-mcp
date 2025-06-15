"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorporateGroupDetailsResponse = void 0;
class CorporateGroupDetailsResponse {
    static getAttributeTypeMap() {
        return CorporateGroupDetailsResponse.attributeTypeMap;
    }
}
exports.CorporateGroupDetailsResponse = CorporateGroupDetailsResponse;
CorporateGroupDetailsResponse.discriminator = undefined;
CorporateGroupDetailsResponse.attributeTypeMap = [
    {
        "name": "group",
        "baseName": "group",
        "type": "CorporateGroupDetailsResponseGroup"
    },
    {
        "name": "subAccounts",
        "baseName": "sub-accounts",
        "type": "Array<CorporateGroupDetailsResponseSubAccountsInner>"
    },
    {
        "name": "users",
        "baseName": "users",
        "type": "Array<CorporateGroupDetailsResponseUsersInner>"
    }
];
//# sourceMappingURL=corporateGroupDetailsResponse.js.map