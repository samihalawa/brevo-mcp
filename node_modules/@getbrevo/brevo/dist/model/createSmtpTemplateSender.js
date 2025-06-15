"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSmtpTemplateSender = void 0;
class CreateSmtpTemplateSender {
    static getAttributeTypeMap() {
        return CreateSmtpTemplateSender.attributeTypeMap;
    }
}
exports.CreateSmtpTemplateSender = CreateSmtpTemplateSender;
CreateSmtpTemplateSender.discriminator = undefined;
CreateSmtpTemplateSender.attributeTypeMap = [
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
//# sourceMappingURL=createSmtpTemplateSender.js.map