"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventIdentifiers = void 0;
class EventIdentifiers {
    static getAttributeTypeMap() {
        return EventIdentifiers.attributeTypeMap;
    }
}
exports.EventIdentifiers = EventIdentifiers;
EventIdentifiers.discriminator = undefined;
EventIdentifiers.attributeTypeMap = [
    {
        "name": "emailId",
        "baseName": "email_id",
        "type": "string"
    },
    {
        "name": "phoneId",
        "baseName": "phone_id",
        "type": "string"
    },
    {
        "name": "whatsappId",
        "baseName": "whatsapp_id",
        "type": "string"
    },
    {
        "name": "landlineNumberId",
        "baseName": "landline_number_id",
        "type": "string"
    },
    {
        "name": "extId",
        "baseName": "ext_id",
        "type": "string"
    }
];
//# sourceMappingURL=eventIdentifiers.js.map