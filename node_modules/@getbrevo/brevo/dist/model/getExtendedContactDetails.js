"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetExtendedContactDetails = void 0;
class GetExtendedContactDetails {
    static getAttributeTypeMap() {
        return GetExtendedContactDetails.attributeTypeMap;
    }
}
exports.GetExtendedContactDetails = GetExtendedContactDetails;
GetExtendedContactDetails.discriminator = undefined;
GetExtendedContactDetails.attributeTypeMap = [
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
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "GetExtendedContactDetailsAllOfStatistics"
    }
];
//# sourceMappingURL=getExtendedContactDetails.js.map