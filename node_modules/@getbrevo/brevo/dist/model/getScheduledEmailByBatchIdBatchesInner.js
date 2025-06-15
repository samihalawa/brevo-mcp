"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetScheduledEmailByBatchIdBatchesInner = void 0;
class GetScheduledEmailByBatchIdBatchesInner {
    static getAttributeTypeMap() {
        return GetScheduledEmailByBatchIdBatchesInner.attributeTypeMap;
    }
}
exports.GetScheduledEmailByBatchIdBatchesInner = GetScheduledEmailByBatchIdBatchesInner;
GetScheduledEmailByBatchIdBatchesInner.discriminator = undefined;
GetScheduledEmailByBatchIdBatchesInner.attributeTypeMap = [
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "Date"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetScheduledEmailByBatchIdBatchesInner.StatusEnum"
    }
];
(function (GetScheduledEmailByBatchIdBatchesInner) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["InProgress"] = 'inProgress'] = "InProgress";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Processed"] = 'processed'] = "Processed";
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
    })(StatusEnum = GetScheduledEmailByBatchIdBatchesInner.StatusEnum || (GetScheduledEmailByBatchIdBatchesInner.StatusEnum = {}));
})(GetScheduledEmailByBatchIdBatchesInner = exports.GetScheduledEmailByBatchIdBatchesInner || (exports.GetScheduledEmailByBatchIdBatchesInner = {}));
//# sourceMappingURL=getScheduledEmailByBatchIdBatchesInner.js.map