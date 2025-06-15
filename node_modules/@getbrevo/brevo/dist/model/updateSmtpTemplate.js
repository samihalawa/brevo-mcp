"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSmtpTemplate = void 0;
class UpdateSmtpTemplate {
    static getAttributeTypeMap() {
        return UpdateSmtpTemplate.attributeTypeMap;
    }
}
exports.UpdateSmtpTemplate = UpdateSmtpTemplate;
UpdateSmtpTemplate.discriminator = undefined;
UpdateSmtpTemplate.attributeTypeMap = [
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "UpdateSmtpTemplateSender"
    },
    {
        "name": "templateName",
        "baseName": "templateName",
        "type": "string"
    },
    {
        "name": "htmlContent",
        "baseName": "htmlContent",
        "type": "string"
    },
    {
        "name": "htmlUrl",
        "baseName": "htmlUrl",
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
        "type": "string"
    },
    {
        "name": "toField",
        "baseName": "toField",
        "type": "string"
    },
    {
        "name": "attachmentUrl",
        "baseName": "attachmentUrl",
        "type": "string"
    },
    {
        "name": "isActive",
        "baseName": "isActive",
        "type": "boolean"
    }
];
//# sourceMappingURL=updateSmtpTemplate.js.map