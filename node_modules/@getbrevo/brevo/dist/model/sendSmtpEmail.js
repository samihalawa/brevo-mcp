"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendSmtpEmail = void 0;
class SendSmtpEmail {
    static getAttributeTypeMap() {
        return SendSmtpEmail.attributeTypeMap;
    }
}
exports.SendSmtpEmail = SendSmtpEmail;
SendSmtpEmail.discriminator = undefined;
SendSmtpEmail.attributeTypeMap = [
    {
        "name": "sender",
        "baseName": "sender",
        "type": "SendSmtpEmailSender"
    },
    {
        "name": "to",
        "baseName": "to",
        "type": "Array<SendSmtpEmailToInner>"
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
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "textContent",
        "baseName": "textContent",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "replyTo",
        "baseName": "replyTo",
        "type": "SendSmtpEmailReplyTo"
    },
    {
        "name": "attachment",
        "baseName": "attachment",
        "type": "Array<SendSmtpEmailAttachmentInner>"
    },
    {
        "name": "headers",
        "baseName": "headers",
        "type": "object"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    },
    {
        "name": "params",
        "baseName": "params",
        "type": "object"
    },
    {
        "name": "messageVersions",
        "baseName": "messageVersions",
        "type": "Array<SendSmtpEmailMessageVersionsInner>"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<string>"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "Date"
    },
    {
        "name": "batchId",
        "baseName": "batchId",
        "type": "string"
    }
];
//# sourceMappingURL=sendSmtpEmail.js.map