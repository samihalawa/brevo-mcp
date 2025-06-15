"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetScheduledEmailByBatchId = void 0;
class GetScheduledEmailByBatchId {
    static getAttributeTypeMap() {
        return GetScheduledEmailByBatchId.attributeTypeMap;
    }
}
exports.GetScheduledEmailByBatchId = GetScheduledEmailByBatchId;
GetScheduledEmailByBatchId.discriminator = undefined;
GetScheduledEmailByBatchId.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "batches",
        "baseName": "batches",
        "type": "Array<GetScheduledEmailByBatchIdBatchesInner>"
    }
];
//# sourceMappingURL=getScheduledEmailByBatchId.js.map