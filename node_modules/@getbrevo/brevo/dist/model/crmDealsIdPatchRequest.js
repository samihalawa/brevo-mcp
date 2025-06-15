"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmDealsIdPatchRequest = void 0;
class CrmDealsIdPatchRequest {
    static getAttributeTypeMap() {
        return CrmDealsIdPatchRequest.attributeTypeMap;
    }
}
exports.CrmDealsIdPatchRequest = CrmDealsIdPatchRequest;
CrmDealsIdPatchRequest.discriminator = undefined;
CrmDealsIdPatchRequest.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "object"
    }
];
//# sourceMappingURL=crmDealsIdPatchRequest.js.map