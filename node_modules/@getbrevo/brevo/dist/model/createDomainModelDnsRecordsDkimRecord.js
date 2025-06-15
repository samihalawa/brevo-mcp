"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDomainModelDnsRecordsDkimRecord = void 0;
class CreateDomainModelDnsRecordsDkimRecord {
    static getAttributeTypeMap() {
        return CreateDomainModelDnsRecordsDkimRecord.attributeTypeMap;
    }
}
exports.CreateDomainModelDnsRecordsDkimRecord = CreateDomainModelDnsRecordsDkimRecord;
CreateDomainModelDnsRecordsDkimRecord.discriminator = undefined;
CreateDomainModelDnsRecordsDkimRecord.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    },
    {
        "name": "hostName",
        "baseName": "host_name",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "boolean"
    }
];
//# sourceMappingURL=createDomainModelDnsRecordsDkimRecord.js.map