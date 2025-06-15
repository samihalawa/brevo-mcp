"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendSms = void 0;
class SendSms {
    static getAttributeTypeMap() {
        return SendSms.attributeTypeMap;
    }
}
exports.SendSms = SendSms;
SendSms.discriminator = undefined;
SendSms.attributeTypeMap = [
    {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
    },
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "number"
    },
    {
        "name": "smsCount",
        "baseName": "smsCount",
        "type": "number"
    },
    {
        "name": "usedCredits",
        "baseName": "usedCredits",
        "type": "number"
    },
    {
        "name": "remainingCredits",
        "baseName": "remainingCredits",
        "type": "number"
    }
];
//# sourceMappingURL=sendSms.js.map