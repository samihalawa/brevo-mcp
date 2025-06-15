"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendWhatsappMessage = void 0;
class SendWhatsappMessage {
    static getAttributeTypeMap() {
        return SendWhatsappMessage.attributeTypeMap;
    }
}
exports.SendWhatsappMessage = SendWhatsappMessage;
SendWhatsappMessage.discriminator = undefined;
SendWhatsappMessage.attributeTypeMap = [
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    },
    {
        "name": "text",
        "baseName": "text",
        "type": "string"
    },
    {
        "name": "senderNumber",
        "baseName": "senderNumber",
        "type": "string"
    },
    {
        "name": "params",
        "baseName": "params",
        "type": "object"
    },
    {
        "name": "contactNumbers",
        "baseName": "contactNumbers",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=sendWhatsappMessage.js.map