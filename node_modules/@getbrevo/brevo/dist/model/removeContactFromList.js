"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveContactFromList = void 0;
class RemoveContactFromList {
    static getAttributeTypeMap() {
        return RemoveContactFromList.attributeTypeMap;
    }
}
exports.RemoveContactFromList = RemoveContactFromList;
RemoveContactFromList.discriminator = undefined;
RemoveContactFromList.attributeTypeMap = [
    {
        "name": "emails",
        "baseName": "emails",
        "type": "Array<string>"
    },
    {
        "name": "ids",
        "baseName": "ids",
        "type": "Array<number>"
    },
    {
        "name": "all",
        "baseName": "all",
        "type": "boolean"
    }
];
//# sourceMappingURL=removeContactFromList.js.map