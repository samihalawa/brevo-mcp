"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorporateSubAccountIpAssociatePostRequest = void 0;
class CorporateSubAccountIpAssociatePostRequest {
    static getAttributeTypeMap() {
        return CorporateSubAccountIpAssociatePostRequest.attributeTypeMap;
    }
}
exports.CorporateSubAccountIpAssociatePostRequest = CorporateSubAccountIpAssociatePostRequest;
CorporateSubAccountIpAssociatePostRequest.discriminator = undefined;
CorporateSubAccountIpAssociatePostRequest.attributeTypeMap = [
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    },
    {
        "name": "ids",
        "baseName": "ids",
        "type": "Array<number>"
    }
];
//# sourceMappingURL=corporateSubAccountIpAssociatePostRequest.js.map