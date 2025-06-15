"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationsMessageFile = void 0;
class ConversationsMessageFile {
    static getAttributeTypeMap() {
        return ConversationsMessageFile.attributeTypeMap;
    }
}
exports.ConversationsMessageFile = ConversationsMessageFile;
ConversationsMessageFile.discriminator = undefined;
ConversationsMessageFile.attributeTypeMap = [
    {
        "name": "filename",
        "baseName": "filename",
        "type": "string"
    },
    {
        "name": "size",
        "baseName": "size",
        "type": "number"
    },
    {
        "name": "isImage",
        "baseName": "isImage",
        "type": "boolean"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "imageInfo",
        "baseName": "imageInfo",
        "type": "ConversationsMessageFileImageInfo"
    }
];
//# sourceMappingURL=conversationsMessageFile.js.map