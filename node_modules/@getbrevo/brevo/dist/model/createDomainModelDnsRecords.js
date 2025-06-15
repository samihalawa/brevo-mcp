"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDomainModelDnsRecords = void 0;
class CreateDomainModelDnsRecords {
    static getAttributeTypeMap() {
        return CreateDomainModelDnsRecords.attributeTypeMap;
    }
}
exports.CreateDomainModelDnsRecords = CreateDomainModelDnsRecords;
CreateDomainModelDnsRecords.discriminator = undefined;
CreateDomainModelDnsRecords.attributeTypeMap = [
    {
        "name": "dkimRecord",
        "baseName": "dkim_record",
        "type": "CreateDomainModelDnsRecordsDkimRecord"
    },
    {
        "name": "brevoCode",
        "baseName": "brevo_code",
        "type": "CreateDomainModelDnsRecordsDkimRecord"
    },
    {
        "name": "dmarcRecord",
        "baseName": "dmarc_record",
        "type": "CreateDomainModelDnsRecordsDkimRecord"
    }
];
//# sourceMappingURL=createDomainModelDnsRecords.js.map