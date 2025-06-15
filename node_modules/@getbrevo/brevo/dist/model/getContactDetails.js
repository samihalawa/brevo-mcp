"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetContactDetails = void 0;
class GetContactDetails {
    static getAttributeTypeMap() {
        return GetContactDetails.attributeTypeMap;
    }
}
exports.GetContactDetails = GetContactDetails;
GetContactDetails.discriminator = undefined;
GetContactDetails.attributeTypeMap = [
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
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "string"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "listUnsubscribed",
        "baseName": "listUnsubscribed",
        "type": "Array<number>"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "object"
    }
];
//# sourceMappingURL=getContactDetails.js.map