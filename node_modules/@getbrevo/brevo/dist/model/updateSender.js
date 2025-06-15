"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSender = void 0;
class UpdateSender {
    static getAttributeTypeMap() {
        return UpdateSender.attributeTypeMap;
    }
}
exports.UpdateSender = UpdateSender;
UpdateSender.discriminator = undefined;
UpdateSender.attributeTypeMap = [
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
//# sourceMappingURL=updateSender.js.map