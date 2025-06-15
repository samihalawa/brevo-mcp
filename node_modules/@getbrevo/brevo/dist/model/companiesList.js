"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesList = void 0;
class CompaniesList {
    static getAttributeTypeMap() {
        return CompaniesList.attributeTypeMap;
    }
}
exports.CompaniesList = CompaniesList;
CompaniesList.discriminator = undefined;
CompaniesList.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<Company>"
    }
];
//# sourceMappingURL=companiesList.js.map