"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEmailEventReportEventsInner = void 0;
class GetEmailEventReportEventsInner {
    static getAttributeTypeMap() {
        return GetEmailEventReportEventsInner.attributeTypeMap;
    }
}
exports.GetEmailEventReportEventsInner = GetEmailEventReportEventsInner;
GetEmailEventReportEventsInner.discriminator = undefined;
GetEmailEventReportEventsInner.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
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
        "type": "GetEmailEventReportEventsInner.EventEnum"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "string"
    },
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    },
    {
        "name": "link",
        "baseName": "link",
        "type": "string"
    },
    {
        "name": "from",
        "baseName": "from",
        "type": "string"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    }
];
(function (GetEmailEventReportEventsInner) {
    let EventEnum;
    (function (EventEnum) {
        EventEnum[EventEnum["Bounces"] = 'bounces'] = "Bounces";
        EventEnum[EventEnum["HardBounces"] = 'hardBounces'] = "HardBounces";
        EventEnum[EventEnum["SoftBounces"] = 'softBounces'] = "SoftBounces";
        EventEnum[EventEnum["Delivered"] = 'delivered'] = "Delivered";
        EventEnum[EventEnum["Spam"] = 'spam'] = "Spam";
        EventEnum[EventEnum["Requests"] = 'requests'] = "Requests";
        EventEnum[EventEnum["Opened"] = 'opened'] = "Opened";
        EventEnum[EventEnum["Clicks"] = 'clicks'] = "Clicks";
        EventEnum[EventEnum["Invalid"] = 'invalid'] = "Invalid";
        EventEnum[EventEnum["Deferred"] = 'deferred'] = "Deferred";
        EventEnum[EventEnum["Blocked"] = 'blocked'] = "Blocked";
        EventEnum[EventEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
        EventEnum[EventEnum["Error"] = 'error'] = "Error";
        EventEnum[EventEnum["LoadedByProxy"] = 'loadedByProxy'] = "LoadedByProxy";
    })(EventEnum = GetEmailEventReportEventsInner.EventEnum || (GetEmailEventReportEventsInner.EventEnum = {}));
})(GetEmailEventReportEventsInner = exports.GetEmailEventReportEventsInner || (exports.GetEmailEventReportEventsInner = {}));
//# sourceMappingURL=getEmailEventReportEventsInner.js.map