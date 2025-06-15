"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemainingCreditModelReseller = void 0;
class RemainingCreditModelReseller {
    static getAttributeTypeMap() {
        return RemainingCreditModelReseller.attributeTypeMap;
    }
}
exports.RemainingCreditModelReseller = RemainingCreditModelReseller;
RemainingCreditModelReseller.discriminator = undefined;
RemainingCreditModelReseller.attributeTypeMap = [
    {
        "name": "sms",
        "baseName": "sms",
        "type": "number"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "number"
    }
];
//# sourceMappingURL=remainingCreditModelReseller.js.map