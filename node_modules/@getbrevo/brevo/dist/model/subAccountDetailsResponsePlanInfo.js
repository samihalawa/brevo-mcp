"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAccountDetailsResponsePlanInfo = void 0;
class SubAccountDetailsResponsePlanInfo {
    static getAttributeTypeMap() {
        return SubAccountDetailsResponsePlanInfo.attributeTypeMap;
    }
}
exports.SubAccountDetailsResponsePlanInfo = SubAccountDetailsResponsePlanInfo;
SubAccountDetailsResponsePlanInfo.discriminator = undefined;
SubAccountDetailsResponsePlanInfo.attributeTypeMap = [
    {
        "name": "credits",
        "baseName": "credits",
        "type": "SubAccountDetailsResponsePlanInfoCredits"
    },
    {
        "name": "features",
        "baseName": "features",
        "type": "SubAccountDetailsResponsePlanInfoFeatures"
    },
    {
        "name": "planType",
        "baseName": "planType",
        "type": "string"
    }
];
//# sourceMappingURL=subAccountDetailsResponsePlanInfo.js.map