"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTransacBlockedContacts = void 0;
class GetTransacBlockedContacts {
    static getAttributeTypeMap() {
        return GetTransacBlockedContacts.attributeTypeMap;
    }
}
exports.GetTransacBlockedContacts = GetTransacBlockedContacts;
GetTransacBlockedContacts.discriminator = undefined;
GetTransacBlockedContacts.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "contacts",
        "baseName": "contacts",
        "type": "Array<GetTransacBlockedContactsContactsInner>"
    }
];
//# sourceMappingURL=getTransacBlockedContacts.js.map