"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccountAllOfRelayData = void 0;
class GetAccountAllOfRelayData {
    static getAttributeTypeMap() {
        return GetAccountAllOfRelayData.attributeTypeMap;
    }
}
exports.GetAccountAllOfRelayData = GetAccountAllOfRelayData;
GetAccountAllOfRelayData.discriminator = undefined;
GetAccountAllOfRelayData.attributeTypeMap = [
    {
        "name": "userName",
        "baseName": "userName",
        "type": "string"
    },
    {
        "name": "relay",
        "baseName": "relay",
        "type": "string"
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "number"
    }
];
//# sourceMappingURL=getAccountAllOfRelayData.js.map