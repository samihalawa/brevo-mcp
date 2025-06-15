"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChildDomain = void 0;
class GetChildDomain {
    static getAttributeTypeMap() {
        return GetChildDomain.attributeTypeMap;
    }
}
exports.GetChildDomain = GetChildDomain;
GetChildDomain.discriminator = undefined;
GetChildDomain.attributeTypeMap = [
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    },
    {
        "name": "active",
        "baseName": "active",
        "type": "boolean"
    }
];
//# sourceMappingURL=getChildDomain.js.map