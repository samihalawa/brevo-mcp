"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendReportEmail = void 0;
class SendReportEmail {
    static getAttributeTypeMap() {
        return SendReportEmail.attributeTypeMap;
    }
}
exports.SendReportEmail = SendReportEmail;
SendReportEmail.discriminator = undefined;
SendReportEmail.attributeTypeMap = [
    {
        "name": "to",
        "baseName": "to",
        "type": "Array<string>"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    }
];
//# sourceMappingURL=sendReportEmail.js.map