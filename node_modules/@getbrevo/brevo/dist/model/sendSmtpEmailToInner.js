"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendSmtpEmailToInner = void 0;
class SendSmtpEmailToInner {
    static getAttributeTypeMap() {
        return SendSmtpEmailToInner.attributeTypeMap;
    }
}
exports.SendSmtpEmailToInner = SendSmtpEmailToInner;
SendSmtpEmailToInner.discriminator = undefined;
SendSmtpEmailToInner.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
//# sourceMappingURL=sendSmtpEmailToInner.js.map