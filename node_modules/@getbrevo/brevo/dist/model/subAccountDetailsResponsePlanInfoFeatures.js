"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAccountDetailsResponsePlanInfoFeatures = void 0;
class SubAccountDetailsResponsePlanInfoFeatures {
    static getAttributeTypeMap() {
        return SubAccountDetailsResponsePlanInfoFeatures.attributeTypeMap;
    }
}
exports.SubAccountDetailsResponsePlanInfoFeatures = SubAccountDetailsResponsePlanInfoFeatures;
SubAccountDetailsResponsePlanInfoFeatures.discriminator = undefined;
SubAccountDetailsResponsePlanInfoFeatures.attributeTypeMap = [
    {
        "name": "inbox",
        "baseName": "inbox",
        "type": "SubAccountDetailsResponsePlanInfoFeaturesInbox"
    },
    {
        "name": "landingPage",
        "baseName": "landingPage",
        "type": "SubAccountDetailsResponsePlanInfoFeaturesLandingPage"
    },
    {
        "name": "users",
        "baseName": "users",
        "type": "SubAccountDetailsResponsePlanInfoFeaturesUsers"
    }
];
//# sourceMappingURL=subAccountDetailsResponsePlanInfoFeatures.js.map