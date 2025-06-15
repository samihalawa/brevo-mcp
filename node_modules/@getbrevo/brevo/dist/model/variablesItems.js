"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariablesItems = void 0;
class VariablesItems {
    static getAttributeTypeMap() {
        return VariablesItems.attributeTypeMap;
    }
}
exports.VariablesItems = VariablesItems;
VariablesItems.discriminator = undefined;
VariablesItems.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "_default",
        "baseName": "default",
        "type": "string"
    },
    {
        "name": "datatype",
        "baseName": "datatype",
        "type": "string"
    }
];
//# sourceMappingURL=variablesItems.js.map