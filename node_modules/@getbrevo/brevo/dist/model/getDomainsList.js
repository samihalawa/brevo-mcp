"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDomainsList = void 0;
class GetDomainsList {
    static getAttributeTypeMap() {
        return GetDomainsList.attributeTypeMap;
    }
}
exports.GetDomainsList = GetDomainsList;
GetDomainsList.discriminator = undefined;
GetDomainsList.attributeTypeMap = [
    {
        "name": "domains",
        "baseName": "domains",
        "type": "Array<GetDomainsListDomainsInner>"
    }
];
//# sourceMappingURL=getDomainsList.js.map