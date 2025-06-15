"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmDealsPostRequest = void 0;
class CrmDealsPostRequest {
    static getAttributeTypeMap() {
        return CrmDealsPostRequest.attributeTypeMap;
    }
}
exports.CrmDealsPostRequest = CrmDealsPostRequest;
CrmDealsPostRequest.discriminator = undefined;
CrmDealsPostRequest.attributeTypeMap = [
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
        "name": "linkedContactsIds",
        "baseName": "linkedContactsIds",
        "type": "Array<number>"
    },
    {
        "name": "linkedCompaniesIds",
        "baseName": "linkedCompaniesIds",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=crmDealsPostRequest.js.map