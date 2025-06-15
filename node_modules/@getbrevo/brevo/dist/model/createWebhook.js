"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWebhook = void 0;
class CreateWebhook {
    constructor() {
        this['type'] = CreateWebhook.TypeEnum.Transactional;
    }
    static getAttributeTypeMap() {
        return CreateWebhook.attributeTypeMap;
    }
}
exports.CreateWebhook = CreateWebhook;
CreateWebhook.discriminator = undefined;
CreateWebhook.attributeTypeMap = [
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
        "type": "Array<CreateWebhook.EventsEnum>"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "CreateWebhook.TypeEnum"
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
(function (CreateWebhook) {
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
    })(EventsEnum = CreateWebhook.EventsEnum || (CreateWebhook.EventsEnum = {}));
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Transactional"] = 'transactional'] = "Transactional";
        TypeEnum[TypeEnum["Marketing"] = 'marketing'] = "Marketing";
        TypeEnum[TypeEnum["Inbound"] = 'inbound'] = "Inbound";
    })(TypeEnum = CreateWebhook.TypeEnum || (CreateWebhook.TypeEnum = {}));
})(CreateWebhook = exports.CreateWebhook || (exports.CreateWebhook = {}));
//# sourceMappingURL=createWebhook.js.map