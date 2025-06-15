"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendTestEmail = void 0;
class SendTestEmail {
    static getAttributeTypeMap() {
        return SendTestEmail.attributeTypeMap;
    }
}
exports.SendTestEmail = SendTestEmail;
SendTestEmail.discriminator = undefined;
SendTestEmail.attributeTypeMap = [
    {
        "name": "emailTo",
        "baseName": "emailTo",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=sendTestEmail.js.map