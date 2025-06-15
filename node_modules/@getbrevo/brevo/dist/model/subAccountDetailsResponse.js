"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAccountDetailsResponse = void 0;
class SubAccountDetailsResponse {
    static getAttributeTypeMap() {
        return SubAccountDetailsResponse.attributeTypeMap;
    }
}
exports.SubAccountDetailsResponse = SubAccountDetailsResponse;
SubAccountDetailsResponse.discriminator = undefined;
SubAccountDetailsResponse.attributeTypeMap = [
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
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "groups",
        "baseName": "groups",
        "type": "Array<SubAccountDetailsResponseGroupsInner>"
    },
    {
        "name": "planInfo",
        "baseName": "planInfo",
        "type": "SubAccountDetailsResponsePlanInfo"
    }
];
//# sourceMappingURL=subAccountDetailsResponse.js.map