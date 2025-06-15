"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDomainModel = void 0;
class CreateDomainModel {
    static getAttributeTypeMap() {
        return CreateDomainModel.attributeTypeMap;
    }
}
exports.CreateDomainModel = CreateDomainModel;
CreateDomainModel.discriminator = undefined;
CreateDomainModel.attributeTypeMap = [
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
        "name": "domainProvider",
        "baseName": "domain_provider",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "dnsRecords",
        "baseName": "dns_records",
        "type": "CreateDomainModelDnsRecords"
    }
];
//# sourceMappingURL=createDomainModel.js.map