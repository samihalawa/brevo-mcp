"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    static getAttributeTypeMap() {
        return Company.attributeTypeMap;
    }
}
exports.Company = Company;
Company.discriminator = undefined;
Company.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "object"
    },
    {
        "name": "linkedContactsIds",
        "baseName": "linkedContactsIds",
        "type": "Array<number>"
    },
    {
        "name": "linkedDealsIds",
        "baseName": "linkedDealsIds",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=company.js.map