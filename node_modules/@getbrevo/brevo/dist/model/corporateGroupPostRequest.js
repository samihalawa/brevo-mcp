"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorporateGroupPostRequest = void 0;
class CorporateGroupPostRequest {
    static getAttributeTypeMap() {
        return CorporateGroupPostRequest.attributeTypeMap;
    }
}
exports.CorporateGroupPostRequest = CorporateGroupPostRequest;
CorporateGroupPostRequest.discriminator = undefined;
CorporateGroupPostRequest.attributeTypeMap = [
    {
        "name": "groupName",
        "baseName": "groupName",
        "type": "string"
    },
    {
        "name": "subAccountIds",
        "baseName": "subAccountIds",
        "type": "Array<number>"
    }
];
//# sourceMappingURL=corporateGroupPostRequest.js.map