"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAccountUpdatePlanRequestFeatures = void 0;
class SubAccountUpdatePlanRequestFeatures {
    static getAttributeTypeMap() {
        return SubAccountUpdatePlanRequestFeatures.attributeTypeMap;
    }
}
exports.SubAccountUpdatePlanRequestFeatures = SubAccountUpdatePlanRequestFeatures;
SubAccountUpdatePlanRequestFeatures.discriminator = undefined;
SubAccountUpdatePlanRequestFeatures.attributeTypeMap = [
    {
        "name": "users",
        "baseName": "users",
        "type": "number"
    },
    {
        "name": "landingPage",
        "baseName": "landingPage",
        "type": "number"
    },
    {
        "name": "inbox",
        "baseName": "inbox",
        "type": "number"
    }
];
//# sourceMappingURL=subAccountUpdatePlanRequestFeatures.js.map