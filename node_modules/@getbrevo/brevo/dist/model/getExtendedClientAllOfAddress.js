"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetExtendedClientAllOfAddress = void 0;
class GetExtendedClientAllOfAddress {
    static getAttributeTypeMap() {
        return GetExtendedClientAllOfAddress.attributeTypeMap;
    }
}
exports.GetExtendedClientAllOfAddress = GetExtendedClientAllOfAddress;
GetExtendedClientAllOfAddress.discriminator = undefined;
GetExtendedClientAllOfAddress.attributeTypeMap = [
    {
        "name": "street",
        "baseName": "street",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "zipCode",
        "baseName": "zipCode",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    }
];
//# sourceMappingURL=getExtendedClientAllOfAddress.js.map