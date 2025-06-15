"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSenderIpsInner = void 0;
class CreateSenderIpsInner {
    static getAttributeTypeMap() {
        return CreateSenderIpsInner.attributeTypeMap;
    }
}
exports.CreateSenderIpsInner = CreateSenderIpsInner;
CreateSenderIpsInner.discriminator = undefined;
CreateSenderIpsInner.attributeTypeMap = [
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    },
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "number"
    }
];
//# sourceMappingURL=createSenderIpsInner.js.map