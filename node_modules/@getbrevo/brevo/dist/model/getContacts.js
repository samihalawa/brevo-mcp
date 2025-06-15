"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetContacts = void 0;
class GetContacts {
    static getAttributeTypeMap() {
        return GetContacts.attributeTypeMap;
    }
}
exports.GetContacts = GetContacts;
GetContacts.discriminator = undefined;
GetContacts.attributeTypeMap = [
    {
        "name": "contacts",
        "baseName": "contacts",
        "type": "Array<GetContactDetails>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
//# sourceMappingURL=getContacts.js.map