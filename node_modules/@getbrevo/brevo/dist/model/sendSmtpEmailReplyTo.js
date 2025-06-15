"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendSmtpEmailReplyTo = void 0;
class SendSmtpEmailReplyTo {
    static getAttributeTypeMap() {
        return SendSmtpEmailReplyTo.attributeTypeMap;
    }
}
exports.SendSmtpEmailReplyTo = SendSmtpEmailReplyTo;
SendSmtpEmailReplyTo.discriminator = undefined;
SendSmtpEmailReplyTo.attributeTypeMap = [
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
//# sourceMappingURL=sendSmtpEmailReplyTo.js.map