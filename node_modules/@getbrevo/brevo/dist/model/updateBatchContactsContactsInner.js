"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBatchContactsContactsInner = void 0;
class UpdateBatchContactsContactsInner {
    static getAttributeTypeMap() {
        return UpdateBatchContactsContactsInner.attributeTypeMap;
    }
}
exports.UpdateBatchContactsContactsInner = UpdateBatchContactsContactsInner;
UpdateBatchContactsContactsInner.discriminator = undefined;
UpdateBatchContactsContactsInner.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "sms",
        "baseName": "sms",
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
        "type": "{ [key: string]: object; }"
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
//# sourceMappingURL=updateBatchContactsContactsInner.js.map