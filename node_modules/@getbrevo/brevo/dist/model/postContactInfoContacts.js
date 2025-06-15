"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostContactInfoContacts = void 0;
class PostContactInfoContacts {
    static getAttributeTypeMap() {
        return PostContactInfoContacts.attributeTypeMap;
    }
}
exports.PostContactInfoContacts = PostContactInfoContacts;
PostContactInfoContacts.discriminator = undefined;
PostContactInfoContacts.attributeTypeMap = [
    {
        "name": "success",
        "baseName": "success",
        "type": "Array<string>"
    },
    {
        "name": "failure",
        "baseName": "failure",
        "type": "Array<string>"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "processId",
        "baseName": "processId",
        "type": "number"
    }
];
//# sourceMappingURL=postContactInfoContacts.js.map