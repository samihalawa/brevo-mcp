"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemainingCreditModel = void 0;
class RemainingCreditModel {
    static getAttributeTypeMap() {
        return RemainingCreditModel.attributeTypeMap;
    }
}
exports.RemainingCreditModel = RemainingCreditModel;
RemainingCreditModel.discriminator = undefined;
RemainingCreditModel.attributeTypeMap = [
    {
        "name": "child",
        "baseName": "child",
        "type": "RemainingCreditModelChild"
    },
    {
        "name": "reseller",
        "baseName": "reseller",
        "type": "RemainingCreditModelReseller"
    }
];
//# sourceMappingURL=remainingCreditModel.js.map