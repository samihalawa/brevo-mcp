"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContact = void 0;
class CreateContact {
    constructor() {
        this['updateEnabled'] = false;
    }
    static getAttributeTypeMap() {
        return CreateContact.attributeTypeMap;
    }
}
exports.CreateContact = CreateContact;
CreateContact.discriminator = undefined;
CreateContact.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "extId",
        "baseName": "ext_id",
        "type": "string"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "object"
    },
    {
        "name": "emailBlacklisted",
        "baseName": "emailBlacklisted",
        "type": "boolean"
    },
    {
        "name": "smsBlacklisted",
        "baseName": "smsBlacklisted",
        "type": "boolean"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "updateEnabled",
        "baseName": "updateEnabled",
        "type": "boolean"
    },
    {
        "name": "smtpBlacklistSender",
        "baseName": "smtpBlacklistSender",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=createContact.js.map