"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendSmtpEmailMessageVersionsInner = void 0;
class SendSmtpEmailMessageVersionsInner {
    static getAttributeTypeMap() {
        return SendSmtpEmailMessageVersionsInner.attributeTypeMap;
    }
}
exports.SendSmtpEmailMessageVersionsInner = SendSmtpEmailMessageVersionsInner;
SendSmtpEmailMessageVersionsInner.discriminator = undefined;
SendSmtpEmailMessageVersionsInner.attributeTypeMap = [
    {
        "name": "to",
        "baseName": "to",
        "type": "Array<SendSmtpEmailMessageVersionsInnerToInner>"
    },
    {
        "name": "params",
        "baseName": "params",
        "type": "{ [key: string]: object; }"
    },
    {
        "name": "bcc",
        "baseName": "bcc",
        "type": "Array<SendSmtpEmailBccInner>"
    },
    {
        "name": "cc",
        "baseName": "cc",
        "type": "Array<SendSmtpEmailCcInner>"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "SendSmtpEmailMessageVersionsInnerReplyTo"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "textContent",
        "baseName": "textContent",
        "type": "string"
    }
];
//# sourceMappingURL=sendSmtpEmailMessageVersionsInner.js.map