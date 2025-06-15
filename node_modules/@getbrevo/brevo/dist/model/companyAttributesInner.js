"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyAttributesInner = void 0;
class CompanyAttributesInner {
    static getAttributeTypeMap() {
        return CompanyAttributesInner.attributeTypeMap;
    }
}
exports.CompanyAttributesInner = CompanyAttributesInner;
CompanyAttributesInner.discriminator = undefined;
CompanyAttributesInner.attributeTypeMap = [
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
//# sourceMappingURL=companyAttributesInner.js.map