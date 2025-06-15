"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmDealsLinkUnlinkIdPatchRequest = void 0;
class CrmDealsLinkUnlinkIdPatchRequest {
    static getAttributeTypeMap() {
        return CrmDealsLinkUnlinkIdPatchRequest.attributeTypeMap;
    }
}
exports.CrmDealsLinkUnlinkIdPatchRequest = CrmDealsLinkUnlinkIdPatchRequest;
CrmDealsLinkUnlinkIdPatchRequest.discriminator = undefined;
CrmDealsLinkUnlinkIdPatchRequest.attributeTypeMap = [
    {
        "name": "linkContactIds",
        "baseName": "linkContactIds",
        "type": "Array<number>"
    },
    {
        "name": "unlinkContactIds",
        "baseName": "unlinkContactIds",
        "type": "Array<number>"
    },
    {
        "name": "linkCompanyIds",
        "baseName": "linkCompanyIds",
        "type": "Array<string>"
    },
    {
        "name": "unlinkCompanyIds",
        "baseName": "unlinkCompanyIds",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=crmDealsLinkUnlinkIdPatchRequest.js.map