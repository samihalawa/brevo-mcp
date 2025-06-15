"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAccountUpdatePlanRequest = void 0;
class SubAccountUpdatePlanRequest {
    static getAttributeTypeMap() {
        return SubAccountUpdatePlanRequest.attributeTypeMap;
    }
}
exports.SubAccountUpdatePlanRequest = SubAccountUpdatePlanRequest;
SubAccountUpdatePlanRequest.discriminator = undefined;
SubAccountUpdatePlanRequest.attributeTypeMap = [
    {
        "name": "credits",
        "baseName": "credits",
        "type": "SubAccountUpdatePlanRequestCredits"
    },
    {
        "name": "features",
        "baseName": "features",
        "type": "SubAccountUpdatePlanRequestFeatures"
    }
];
//# sourceMappingURL=subAccountUpdatePlanRequest.js.map