"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSendFailed = void 0;
class PostSendFailed {
    static getAttributeTypeMap() {
        return PostSendFailed.attributeTypeMap;
    }
}
exports.PostSendFailed = PostSendFailed;
PostSendFailed.discriminator = undefined;
PostSendFailed.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "unexistingEmails",
        "baseName": "unexistingEmails",
        "type": "Array<string>"
    },
    {
        "name": "withoutListEmails",
        "baseName": "withoutListEmails",
        "type": "Array<string>"
    },
    {
        "name": "blackListedEmails",
        "baseName": "blackListedEmails",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=postSendFailed.js.map