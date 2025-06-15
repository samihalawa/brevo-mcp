"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetIpFromSender = void 0;
class GetIpFromSender {
    static getAttributeTypeMap() {
        return GetIpFromSender.attributeTypeMap;
    }
}
exports.GetIpFromSender = GetIpFromSender;
GetIpFromSender.discriminator = undefined;
GetIpFromSender.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
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
//# sourceMappingURL=getIpFromSender.js.map