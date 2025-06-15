"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealAttributesInner = void 0;
class DealAttributesInner {
    static getAttributeTypeMap() {
        return DealAttributesInner.attributeTypeMap;
    }
}
exports.DealAttributesInner = DealAttributesInner;
DealAttributesInner.discriminator = undefined;
DealAttributesInner.attributeTypeMap = [
    {
        "name": "internalName",
        "baseName": "internalName",
        "type": "string"
    },
    {
        "name": "label",
        "baseName": "label",
        "type": "string"
    },
    {
        "name": "attributeTypeName",
        "baseName": "attributeTypeName",
        "type": "string"
    },
    {
        "name": "attributeOptions",
        "baseName": "attributeOptions",
        "type": "Array<object>"
    },
    {
        "name": "isRequired",
        "baseName": "isRequired",
        "type": "boolean"
    }
];
//# sourceMappingURL=dealAttributesInner.js.map