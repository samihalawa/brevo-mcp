"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterDetailsResponseBillingInfo = void 0;
class MasterDetailsResponseBillingInfo {
    static getAttributeTypeMap() {
        return MasterDetailsResponseBillingInfo.attributeTypeMap;
    }
}
exports.MasterDetailsResponseBillingInfo = MasterDetailsResponseBillingInfo;
MasterDetailsResponseBillingInfo.discriminator = undefined;
MasterDetailsResponseBillingInfo.attributeTypeMap = [
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
        "name": "name",
        "baseName": "name",
        "type": "MasterDetailsResponseBillingInfoName"
    },
    {
        "name": "address",
        "baseName": "address",
        "type": "MasterDetailsResponseBillingInfoAddress"
    }
];
//# sourceMappingURL=masterDetailsResponseBillingInfo.js.map