"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendSmtpEmailAttachmentInner = void 0;
class SendSmtpEmailAttachmentInner {
    static getAttributeTypeMap() {
        return SendSmtpEmailAttachmentInner.attributeTypeMap;
    }
}
exports.SendSmtpEmailAttachmentInner = SendSmtpEmailAttachmentInner;
SendSmtpEmailAttachmentInner.discriminator = undefined;
SendSmtpEmailAttachmentInner.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
//# sourceMappingURL=sendSmtpEmailAttachmentInner.js.map