"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorporateSubAccountIpDissociatePutRequest = void 0;
class CorporateSubAccountIpDissociatePutRequest {
    static getAttributeTypeMap() {
        return CorporateSubAccountIpDissociatePutRequest.attributeTypeMap;
    }
}
exports.CorporateSubAccountIpDissociatePutRequest = CorporateSubAccountIpDissociatePutRequest;
CorporateSubAccountIpDissociatePutRequest.discriminator = undefined;
CorporateSubAccountIpDissociatePutRequest.attributeTypeMap = [
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
//# sourceMappingURL=corporateSubAccountIpDissociatePutRequest.js.map