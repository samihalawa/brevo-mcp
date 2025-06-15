"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompaniesLinkUnlinkIdPatchRequest = void 0;
class CompaniesLinkUnlinkIdPatchRequest {
    static getAttributeTypeMap() {
        return CompaniesLinkUnlinkIdPatchRequest.attributeTypeMap;
    }
}
exports.CompaniesLinkUnlinkIdPatchRequest = CompaniesLinkUnlinkIdPatchRequest;
CompaniesLinkUnlinkIdPatchRequest.discriminator = undefined;
CompaniesLinkUnlinkIdPatchRequest.attributeTypeMap = [
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
        "name": "linkDealsIds",
        "baseName": "linkDealsIds",
        "type": "Array<string>"
    },
    {
        "name": "unlinkDealsIds",
        "baseName": "unlinkDealsIds",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=companiesLinkUnlinkIdPatchRequest.js.map