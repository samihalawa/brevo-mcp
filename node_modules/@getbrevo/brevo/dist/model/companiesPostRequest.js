"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesPostRequest = void 0;
class CompaniesPostRequest {
    static getAttributeTypeMap() {
        return CompaniesPostRequest.attributeTypeMap;
    }
}
exports.CompaniesPostRequest = CompaniesPostRequest;
CompaniesPostRequest.discriminator = undefined;
CompaniesPostRequest.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "object"
    },
    {
        "name": "countryCode",
        "baseName": "countryCode",
        "type": "number"
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
//# sourceMappingURL=companiesPostRequest.js.map