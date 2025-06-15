"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSmtpTemplate = void 0;
class CreateSmtpTemplate {
    static getAttributeTypeMap() {
        return CreateSmtpTemplate.attributeTypeMap;
    }
}
exports.CreateSmtpTemplate = CreateSmtpTemplate;
CreateSmtpTemplate.discriminator = undefined;
CreateSmtpTemplate.attributeTypeMap = [
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "CreateSmtpTemplateSender"
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
//# sourceMappingURL=createSmtpTemplate.js.map