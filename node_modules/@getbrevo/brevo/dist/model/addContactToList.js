"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddContactToList = void 0;
class AddContactToList {
    static getAttributeTypeMap() {
        return AddContactToList.attributeTypeMap;
    }
}
exports.AddContactToList = AddContactToList;
AddContactToList.discriminator = undefined;
AddContactToList.attributeTypeMap = [
    {
        "name": "emails",
        "baseName": "emails",
        "type": "Array<string>"
    },
    {
        "name": "ids",
        "baseName": "ids",
        "type": "Array<number>"
    }
];
//# sourceMappingURL=addContactToList.js.map