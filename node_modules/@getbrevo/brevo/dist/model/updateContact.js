"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContact = void 0;
class UpdateContact {
    static getAttributeTypeMap() {
        return UpdateContact.attributeTypeMap;
    }
}
exports.UpdateContact = UpdateContact;
UpdateContact.discriminator = undefined;
UpdateContact.attributeTypeMap = [
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "object"
    },
    {
        "name": "extId",
        "baseName": "ext_id",
        "type": "string"
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
        "name": "unlinkListIds",
        "baseName": "unlinkListIds",
        "type": "Array<number>"
    },
    {
        "name": "smtpBlacklistSender",
        "baseName": "smtpBlacklistSender",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=updateContact.js.map