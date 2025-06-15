"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetIp = void 0;
class GetIp {
    static getAttributeTypeMap() {
        return GetIp.attributeTypeMap;
    }
}
exports.GetIp = GetIp;
GetIp.discriminator = undefined;
GetIp.attributeTypeMap = [
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
        "name": "active",
        "baseName": "active",
        "type": "boolean"
    },
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    }
];
//# sourceMappingURL=getIp.js.map