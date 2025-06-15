"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAttributes = void 0;
class GetAttributes {
    static getAttributeTypeMap() {
        return GetAttributes.attributeTypeMap;
    }
}
exports.GetAttributes = GetAttributes;
GetAttributes.discriminator = undefined;
GetAttributes.attributeTypeMap = [
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "Array<GetAttributesAttributesInner>"
    }
];
//# sourceMappingURL=getAttributes.js.map