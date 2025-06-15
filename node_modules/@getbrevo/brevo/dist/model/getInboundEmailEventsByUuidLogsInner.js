"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInboundEmailEventsByUuidLogsInner = void 0;
class GetInboundEmailEventsByUuidLogsInner {
    static getAttributeTypeMap() {
        return GetInboundEmailEventsByUuidLogsInner.attributeTypeMap;
    }
}
exports.GetInboundEmailEventsByUuidLogsInner = GetInboundEmailEventsByUuidLogsInner;
GetInboundEmailEventsByUuidLogsInner.discriminator = undefined;
GetInboundEmailEventsByUuidLogsInner.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
        "type": "Date"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "GetInboundEmailEventsByUuidLogsInner.TypeEnum"
    }
];
(function (GetInboundEmailEventsByUuidLogsInner) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Received"] = 'received'] = "Received";
        TypeEnum[TypeEnum["Processed"] = 'processed'] = "Processed";
        TypeEnum[TypeEnum["WebhookFailed"] = 'webhookFailed'] = "WebhookFailed";
        TypeEnum[TypeEnum["WebhookDelivered"] = 'webhookDelivered'] = "WebhookDelivered";
    })(TypeEnum = GetInboundEmailEventsByUuidLogsInner.TypeEnum || (GetInboundEmailEventsByUuidLogsInner.TypeEnum = {}));
})(GetInboundEmailEventsByUuidLogsInner = exports.GetInboundEmailEventsByUuidLogsInner || (exports.GetInboundEmailEventsByUuidLogsInner = {}));
//# sourceMappingURL=getInboundEmailEventsByUuidLogsInner.js.map