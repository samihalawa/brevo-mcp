"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAccountDetailsResponsePlanInfoCredits = void 0;
class SubAccountDetailsResponsePlanInfoCredits {
    static getAttributeTypeMap() {
        return SubAccountDetailsResponsePlanInfoCredits.attributeTypeMap;
    }
}
exports.SubAccountDetailsResponsePlanInfoCredits = SubAccountDetailsResponsePlanInfoCredits;
SubAccountDetailsResponsePlanInfoCredits.discriminator = undefined;
SubAccountDetailsResponsePlanInfoCredits.attributeTypeMap = [
    {
        "name": "emails",
        "baseName": "emails",
        "type": "SubAccountDetailsResponsePlanInfoCreditsEmails"
    },
    {
        "name": "sms",
        "baseName": "sms",
        "type": "SubAccountDetailsResponsePlanInfoCreditsSms"
    },
    {
        "name": "wpSubscribers",
        "baseName": "wpSubscribers",
        "type": "SubAccountDetailsResponsePlanInfoCreditsWpSubscribers"
    }
];
//# sourceMappingURL=subAccountDetailsResponsePlanInfoCredits.js.map