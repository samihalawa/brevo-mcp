"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterDetailsResponse = void 0;
class MasterDetailsResponse {
    static getAttributeTypeMap() {
        return MasterDetailsResponse.attributeTypeMap;
    }
}
exports.MasterDetailsResponse = MasterDetailsResponse;
MasterDetailsResponse.discriminator = undefined;
MasterDetailsResponse.attributeTypeMap = [
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
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "currencyCode",
        "baseName": "currencyCode",
        "type": "string"
    },
    {
        "name": "timezone",
        "baseName": "timezone",
        "type": "string"
    },
    {
        "name": "billingInfo",
        "baseName": "billingInfo",
        "type": "MasterDetailsResponseBillingInfo"
    },
    {
        "name": "planInfo",
        "baseName": "planInfo",
        "type": "MasterDetailsResponsePlanInfo"
    }
];
//# sourceMappingURL=masterDetailsResponse.js.map