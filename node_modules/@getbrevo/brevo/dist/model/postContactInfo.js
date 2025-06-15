"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostContactInfo = void 0;
class PostContactInfo {
    static getAttributeTypeMap() {
        return PostContactInfo.attributeTypeMap;
    }
}
exports.PostContactInfo = PostContactInfo;
PostContactInfo.discriminator = undefined;
PostContactInfo.attributeTypeMap = [
    {
        "name": "contacts",
        "baseName": "contacts",
        "type": "PostContactInfoContacts"
    }
];
//# sourceMappingURL=postContactInfo.js.map