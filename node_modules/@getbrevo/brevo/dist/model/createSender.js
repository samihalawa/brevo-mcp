"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSender = void 0;
class CreateSender {
    static getAttributeTypeMap() {
        return CreateSender.attributeTypeMap;
    }
}
exports.CreateSender = CreateSender;
CreateSender.discriminator = undefined;
CreateSender.attributeTypeMap = [
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
        "name": "ips",
        "baseName": "ips",
        "type": "Array<CreateSenderIpsInner>"
    }
];
//# sourceMappingURL=createSender.js.map