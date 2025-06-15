"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWebhook = void 0;
class UpdateWebhook {
    static getAttributeTypeMap() {
        return UpdateWebhook.attributeTypeMap;
    }
}
exports.UpdateWebhook = UpdateWebhook;
UpdateWebhook.discriminator = undefined;
UpdateWebhook.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<UpdateWebhook.EventsEnum>"
    },
    {
        "name": "domain",
        "baseName": "domain",
        "type": "string"
    },
    {
        "name": "batched",
        "baseName": "batched",
        "type": "boolean"
    },
    {
        "name": "auth",
        "baseName": "auth",
        "type": "GetWebhookAuth"
    },
    {
        "name": "headers",
        "baseName": "headers",
        "type": "Array<GetWebhookHeadersInner>"
    }
];
(function (UpdateWebhook) {
    let EventsEnum;
    (function (EventsEnum) {
        EventsEnum[EventsEnum["Sent"] = 'sent'] = "Sent";
        EventsEnum[EventsEnum["HardBounce"] = 'hardBounce'] = "HardBounce";
        EventsEnum[EventsEnum["SoftBounce"] = 'softBounce'] = "SoftBounce";
        EventsEnum[EventsEnum["Blocked"] = 'blocked'] = "Blocked";
        EventsEnum[EventsEnum["Spam"] = 'spam'] = "Spam";
        EventsEnum[EventsEnum["Delivered"] = 'delivered'] = "Delivered";
        EventsEnum[EventsEnum["Request"] = 'request'] = "Request";
        EventsEnum[EventsEnum["Click"] = 'click'] = "Click";
        EventsEnum[EventsEnum["Invalid"] = 'invalid'] = "Invalid";
        EventsEnum[EventsEnum["Deferred"] = 'deferred'] = "Deferred";
        EventsEnum[EventsEnum["Opened"] = 'opened'] = "Opened";
        EventsEnum[EventsEnum["UniqueOpened"] = 'uniqueOpened'] = "UniqueOpened";
        EventsEnum[EventsEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
        EventsEnum[EventsEnum["ListAddition"] = 'listAddition'] = "ListAddition";
        EventsEnum[EventsEnum["ContactUpdated"] = 'contactUpdated'] = "ContactUpdated";
        EventsEnum[EventsEnum["ContactDeleted"] = 'contactDeleted'] = "ContactDeleted";
        EventsEnum[EventsEnum["InboundEmailProcessed"] = 'inboundEmailProcessed'] = "InboundEmailProcessed";
    })(EventsEnum = UpdateWebhook.EventsEnum || (UpdateWebhook.EventsEnum = {}));
})(UpdateWebhook = exports.UpdateWebhook || (exports.UpdateWebhook = {}));
//# sourceMappingURL=updateWebhook.js.map