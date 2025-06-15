"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWhatsappEventReportEventsInner = void 0;
class GetWhatsappEventReportEventsInner {
    static getAttributeTypeMap() {
        return GetWhatsappEventReportEventsInner.attributeTypeMap;
    }
}
exports.GetWhatsappEventReportEventsInner = GetWhatsappEventReportEventsInner;
GetWhatsappEventReportEventsInner.discriminator = undefined;
GetWhatsappEventReportEventsInner.attributeTypeMap = [
    {
        "name": "contactNumber",
        "baseName": "contactNumber",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    },
    {
        "name": "event",
        "baseName": "event",
        "type": "GetWhatsappEventReportEventsInner.EventEnum"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "mediaUrl",
        "baseName": "mediaUrl",
        "type": "string"
    },
    {
        "name": "senderNumber",
        "baseName": "senderNumber",
        "type": "string"
    }
];
(function (GetWhatsappEventReportEventsInner) {
    let EventEnum;
    (function (EventEnum) {
        EventEnum[EventEnum["Sent"] = 'sent'] = "Sent";
        EventEnum[EventEnum["Delivered"] = 'delivered'] = "Delivered";
        EventEnum[EventEnum["Read"] = 'read'] = "Read";
        EventEnum[EventEnum["Error"] = 'error'] = "Error";
        EventEnum[EventEnum["Unsubscribe"] = 'unsubscribe'] = "Unsubscribe";
        EventEnum[EventEnum["Reply"] = 'reply'] = "Reply";
        EventEnum[EventEnum["SoftBounce"] = 'soft-bounce'] = "SoftBounce";
    })(EventEnum = GetWhatsappEventReportEventsInner.EventEnum || (GetWhatsappEventReportEventsInner.EventEnum = {}));
})(GetWhatsappEventReportEventsInner = exports.GetWhatsappEventReportEventsInner || (exports.GetWhatsappEventReportEventsInner = {}));
//# sourceMappingURL=getWhatsappEventReportEventsInner.js.map