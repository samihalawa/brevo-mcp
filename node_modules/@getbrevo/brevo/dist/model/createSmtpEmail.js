"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSmtpEmail = void 0;
class CreateSmtpEmail {
    static getAttributeTypeMap() {
        return CreateSmtpEmail.attributeTypeMap;
    }
}
exports.CreateSmtpEmail = CreateSmtpEmail;
CreateSmtpEmail.discriminator = undefined;
CreateSmtpEmail.attributeTypeMap = [
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    },
    {
        "name": "messageIds",
        "baseName": "messageIds",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=createSmtpEmail.js.map