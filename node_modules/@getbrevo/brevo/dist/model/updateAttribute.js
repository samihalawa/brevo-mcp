"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAttribute = void 0;
class UpdateAttribute {
    static getAttributeTypeMap() {
        return UpdateAttribute.attributeTypeMap;
    }
}
exports.UpdateAttribute = UpdateAttribute;
UpdateAttribute.discriminator = undefined;
UpdateAttribute.attributeTypeMap = [
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    },
    {
        "name": "enumeration",
        "baseName": "enumeration",
        "type": "Array<UpdateAttributeEnumerationInner>"
    }
];
//# sourceMappingURL=updateAttribute.js.map