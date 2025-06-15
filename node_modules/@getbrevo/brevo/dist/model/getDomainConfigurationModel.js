"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDomainConfigurationModel = void 0;
class GetDomainConfigurationModel {
    static getAttributeTypeMap() {
        return GetDomainConfigurationModel.attributeTypeMap;
    }
}
exports.GetDomainConfigurationModel = GetDomainConfigurationModel;
GetDomainConfigurationModel.discriminator = undefined;
GetDomainConfigurationModel.attributeTypeMap = [
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    },
    {
        "name": "verified",
        "baseName": "verified",
        "type": "boolean"
    },
    {
        "name": "authenticated",
        "baseName": "authenticated",
        "type": "boolean"
    },
    {
        "name": "dnsRecords",
        "baseName": "dns_records",
        "type": "CreateDomainModelDnsRecords"
    }
];
//# sourceMappingURL=getDomainConfigurationModel.js.map