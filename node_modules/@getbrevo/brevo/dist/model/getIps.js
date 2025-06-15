"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetIps = void 0;
class GetIps {
    static getAttributeTypeMap() {
        return GetIps.attributeTypeMap;
    }
}
exports.GetIps = GetIps;
GetIps.discriminator = undefined;
GetIps.attributeTypeMap = [
    {
        "name": "ips",
        "baseName": "ips",
        "type": "Array<GetIp>"
    }
];
//# sourceMappingURL=getIps.js.map