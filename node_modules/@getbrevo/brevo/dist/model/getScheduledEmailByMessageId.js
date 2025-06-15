"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetScheduledEmailByMessageId = void 0;
class GetScheduledEmailByMessageId {
    static getAttributeTypeMap() {
        return GetScheduledEmailByMessageId.attributeTypeMap;
    }
}
exports.GetScheduledEmailByMessageId = GetScheduledEmailByMessageId;
GetScheduledEmailByMessageId.discriminator = undefined;
GetScheduledEmailByMessageId.attributeTypeMap = [
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
        "type": "GetScheduledEmailByMessageId.StatusEnum"
    }
];
(function (GetScheduledEmailByMessageId) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["InProgress"] = 'inProgress'] = "InProgress";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Processed"] = 'processed'] = "Processed";
        StatusEnum[StatusEnum["Error"] = 'error'] = "Error";
    })(StatusEnum = GetScheduledEmailByMessageId.StatusEnum || (GetScheduledEmailByMessageId.StatusEnum = {}));
})(GetScheduledEmailByMessageId = exports.GetScheduledEmailByMessageId || (exports.GetScheduledEmailByMessageId = {}));
//# sourceMappingURL=getScheduledEmailByMessageId.js.map