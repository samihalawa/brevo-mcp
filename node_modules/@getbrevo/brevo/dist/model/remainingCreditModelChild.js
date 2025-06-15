"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemainingCreditModelChild = void 0;
class RemainingCreditModelChild {
    static getAttributeTypeMap() {
        return RemainingCreditModelChild.attributeTypeMap;
    }
}
exports.RemainingCreditModelChild = RemainingCreditModelChild;
RemainingCreditModelChild.discriminator = undefined;
RemainingCreditModelChild.attributeTypeMap = [
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
//# sourceMappingURL=remainingCreditModelChild.js.map