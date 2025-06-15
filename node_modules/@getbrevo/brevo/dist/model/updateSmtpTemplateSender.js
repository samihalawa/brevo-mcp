"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSmtpTemplateSender = void 0;
class UpdateSmtpTemplateSender {
    static getAttributeTypeMap() {
        return UpdateSmtpTemplateSender.attributeTypeMap;
    }
}
exports.UpdateSmtpTemplateSender = UpdateSmtpTemplateSender;
UpdateSmtpTemplateSender.discriminator = undefined;
UpdateSmtpTemplateSender.attributeTypeMap = [
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
//# sourceMappingURL=updateSmtpTemplateSender.js.map