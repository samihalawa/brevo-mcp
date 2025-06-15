"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationsMessageFileImageInfo = void 0;
class ConversationsMessageFileImageInfo {
    static getAttributeTypeMap() {
        return ConversationsMessageFileImageInfo.attributeTypeMap;
    }
}
exports.ConversationsMessageFileImageInfo = ConversationsMessageFileImageInfo;
ConversationsMessageFileImageInfo.discriminator = undefined;
ConversationsMessageFileImageInfo.attributeTypeMap = [
    {
        "name": "width",
        "baseName": "width",
        "type": "number"
    },
    {
        "name": "height",
        "baseName": "height",
        "type": "number"
    },
    {
        "name": "previewUrl",
        "baseName": "previewUrl",
        "type": "string"
    }
];
//# sourceMappingURL=conversationsMessageFileImageInfo.js.map