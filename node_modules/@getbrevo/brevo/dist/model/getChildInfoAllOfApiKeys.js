"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChildInfoAllOfApiKeys = void 0;
class GetChildInfoAllOfApiKeys {
    static getAttributeTypeMap() {
        return GetChildInfoAllOfApiKeys.attributeTypeMap;
    }
}
exports.GetChildInfoAllOfApiKeys = GetChildInfoAllOfApiKeys;
GetChildInfoAllOfApiKeys.discriminator = undefined;
GetChildInfoAllOfApiKeys.attributeTypeMap = [
    {
        "name": "v2",
        "baseName": "v2",
        "type": "Array<GetChildInfoAllOfApiKeysV2>"
    },
    {
        "name": "v3",
        "baseName": "v3",
        "type": "Array<GetChildInfoAllOfApiKeysV3>"
    }
];
//# sourceMappingURL=getChildInfoAllOfApiKeys.js.map