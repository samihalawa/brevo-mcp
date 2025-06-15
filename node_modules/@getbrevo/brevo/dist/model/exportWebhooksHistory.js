"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportWebhooksHistory = void 0;
class ExportWebhooksHistory {
    static getAttributeTypeMap() {
        return ExportWebhooksHistory.attributeTypeMap;
    }
}
exports.ExportWebhooksHistory = ExportWebhooksHistory;
ExportWebhooksHistory.discriminator = undefined;
ExportWebhooksHistory.attributeTypeMap = [
    {
        "name": "days",
        "baseName": "days",
        "type": "number"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "string"
    },
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "string"
    },
    {
        "name": "sort",
        "baseName": "sort",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ExportWebhooksHistory.TypeEnum"
    },
    {
        "name": "event",
        "baseName": "event",
        "type": "ExportWebhooksHistory.EventEnum"
    },
    {
        "name": "notifyURL",
        "baseName": "notifyURL",
        "type": "string"
    },
    {
        "name": "webhookId",
        "baseName": "webhookId",
        "type": "number"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "number"
    }
];
(function (ExportWebhooksHistory) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Transactional"] = 'transactional'] = "Transactional";
        TypeEnum[TypeEnum["Marketing"] = 'marketing'] = "Marketing";
    })(TypeEnum = ExportWebhooksHistory.TypeEnum || (ExportWebhooksHistory.TypeEnum = {}));
    let EventEnum;
    (function (EventEnum) {
        EventEnum[EventEnum["InvalidParameter"] = 'invalid_parameter'] = "InvalidParameter";
        EventEnum[EventEnum["MissingParameter"] = 'missing_parameter'] = "MissingParameter";
        EventEnum[EventEnum["HardBounce"] = 'hardBounce'] = "HardBounce";
        EventEnum[EventEnum["SoftBounce"] = 'softBounce'] = "SoftBounce";
        EventEnum[EventEnum["Delivered"] = 'delivered'] = "Delivered";
        EventEnum[EventEnum["Spam"] = 'spam'] = "Spam";
        EventEnum[EventEnum["Request"] = 'request'] = "Request";
        EventEnum[EventEnum["Opened"] = 'opened'] = "Opened";
        EventEnum[EventEnum["Click"] = 'click'] = "Click";
        EventEnum[EventEnum["Invalid"] = 'invalid'] = "Invalid";
        EventEnum[EventEnum["Deferred"] = 'deferred'] = "Deferred";
        EventEnum[EventEnum["Blocked"] = 'blocked'] = "Blocked";
        EventEnum[EventEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
        EventEnum[EventEnum["Error"] = 'error'] = "Error";
        EventEnum[EventEnum["UniqueOpened"] = 'uniqueOpened'] = "UniqueOpened";
        EventEnum[EventEnum["LoadedByProxy"] = 'loadedByProxy'] = "LoadedByProxy";
        EventEnum[EventEnum["AllEvents"] = 'allEvents'] = "AllEvents";
    })(EventEnum = ExportWebhooksHistory.EventEnum || (ExportWebhooksHistory.EventEnum = {}));
})(ExportWebhooksHistory = exports.ExportWebhooksHistory || (exports.ExportWebhooksHistory = {}));
//# sourceMappingURL=exportWebhooksHistory.js.map