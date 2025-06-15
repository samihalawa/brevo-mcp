"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAccountUpdatePlanRequestCredits = void 0;
class SubAccountUpdatePlanRequestCredits {
    static getAttributeTypeMap() {
        return SubAccountUpdatePlanRequestCredits.attributeTypeMap;
    }
}
exports.SubAccountUpdatePlanRequestCredits = SubAccountUpdatePlanRequestCredits;
SubAccountUpdatePlanRequestCredits.discriminator = undefined;
SubAccountUpdatePlanRequestCredits.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "number"
    },
    {
        "name": "sms",
        "baseName": "sms",
        "type": "number"
    },
    {
        "name": "wpSubscribers",
        "baseName": "wpSubscribers",
        "type": "number"
    }
];
//# sourceMappingURL=subAccountUpdatePlanRequestCredits.js.map