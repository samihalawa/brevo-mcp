"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendSmtpEmailSender = void 0;
class SendSmtpEmailSender {
    static getAttributeTypeMap() {
        return SendSmtpEmailSender.attributeTypeMap;
    }
}
exports.SendSmtpEmailSender = SendSmtpEmailSender;
SendSmtpEmailSender.discriminator = undefined;
SendSmtpEmailSender.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
//# sourceMappingURL=sendSmtpEmailSender.js.map