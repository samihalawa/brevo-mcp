"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterDetailsResponseBillingInfoAddress = void 0;
class MasterDetailsResponseBillingInfoAddress {
    static getAttributeTypeMap() {
        return MasterDetailsResponseBillingInfoAddress.attributeTypeMap;
    }
}
exports.MasterDetailsResponseBillingInfoAddress = MasterDetailsResponseBillingInfoAddress;
MasterDetailsResponseBillingInfoAddress.discriminator = undefined;
MasterDetailsResponseBillingInfoAddress.attributeTypeMap = [
    {
        "name": "streetAddress",
        "baseName": "streetAddress",
        "type": "string"
    },
    {
        "name": "locality",
        "baseName": "locality",
        "type": "string"
    },
    {
        "name": "postalCode",
        "baseName": "postalCode",
        "type": "string"
    },
    {
        "name": "stateCode",
        "baseName": "stateCode",
        "type": "string"
    },
    {
        "name": "countryCode",
        "baseName": "countryCode",
        "type": "string"
    }
];
//# sourceMappingURL=masterDetailsResponseBillingInfoAddress.js.map