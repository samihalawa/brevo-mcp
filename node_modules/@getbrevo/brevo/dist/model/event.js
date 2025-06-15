"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
class Event {
    static getAttributeTypeMap() {
        return Event.attributeTypeMap;
    }
}
exports.Event = Event;
Event.discriminator = undefined;
Event.attributeTypeMap = [
    {
        "name": "eventName",
        "baseName": "event_name",
        "type": "string"
    },
    {
        "name": "eventDate",
        "baseName": "event_date",
        "type": "string"
    },
    {
        "name": "identifiers",
        "baseName": "identifiers",
        "type": "EventIdentifiers"
    },
    {
        "name": "contactProperties",
        "baseName": "contact_properties",
        "type": "object"
    },
    {
        "name": "eventProperties",
        "baseName": "event_properties",
        "type": "object"
    }
];
//# sourceMappingURL=event.js.map