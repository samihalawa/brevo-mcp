"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesIdPatchRequest = void 0;
class CompaniesIdPatchRequest {
    static getAttributeTypeMap() {
        return CompaniesIdPatchRequest.attributeTypeMap;
    }
}
exports.CompaniesIdPatchRequest = CompaniesIdPatchRequest;
CompaniesIdPatchRequest.discriminator = undefined;
CompaniesIdPatchRequest.attributeTypeMap = [
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
    }
];
//# sourceMappingURL=companiesIdPatchRequest.js.map