"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTransacBlockedContactsContactsInner = void 0;
class GetTransacBlockedContactsContactsInner {
    static getAttributeTypeMap() {
        return GetTransacBlockedContactsContactsInner.attributeTypeMap;
    }
}
exports.GetTransacBlockedContactsContactsInner = GetTransacBlockedContactsContactsInner;
GetTransacBlockedContactsContactsInner.discriminator = undefined;
GetTransacBlockedContactsContactsInner.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "senderEmail",
        "baseName": "senderEmail",
        "type": "string"
    },
    {
        "name": "reason",
        "baseName": "reason",
        "type": "GetTransacBlockedContactsContactsInnerReason"
    },
    {
        "name": "blockedAt",
        "baseName": "blockedAt",
        "type": "string"
    }
];
//# sourceMappingURL=getTransacBlockedContactsContactsInner.js.map