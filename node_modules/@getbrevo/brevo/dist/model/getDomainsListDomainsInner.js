"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDomainsListDomainsInner = void 0;
class GetDomainsListDomainsInner {
    static getAttributeTypeMap() {
        return GetDomainsListDomainsInner.attributeTypeMap;
    }
}
exports.GetDomainsListDomainsInner = GetDomainsListDomainsInner;
GetDomainsListDomainsInner.discriminator = undefined;
GetDomainsListDomainsInner.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "domainName",
        "baseName": "domain_name",
        "type": "string"
    },
    {
        "name": "authenticated",
        "baseName": "authenticated",
        "type": "boolean"
    },
    {
        "name": "verified",
        "baseName": "verified",
        "type": "boolean"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
//# sourceMappingURL=getDomainsListDomainsInner.js.map