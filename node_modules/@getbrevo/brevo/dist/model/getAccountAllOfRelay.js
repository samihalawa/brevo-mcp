"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccountAllOfRelay = void 0;
class GetAccountAllOfRelay {
    static getAttributeTypeMap() {
        return GetAccountAllOfRelay.attributeTypeMap;
    }
}
exports.GetAccountAllOfRelay = GetAccountAllOfRelay;
GetAccountAllOfRelay.discriminator = undefined;
GetAccountAllOfRelay.attributeTypeMap = [
    {
        "name": "enabled",
        "baseName": "enabled",
        "type": "boolean"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "GetAccountAllOfRelayData"
    }
];
//# sourceMappingURL=getAccountAllOfRelay.js.map