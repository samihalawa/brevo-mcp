"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSendSmsTestFailed = void 0;
class PostSendSmsTestFailed {
    static getAttributeTypeMap() {
        return PostSendSmsTestFailed.attributeTypeMap;
    }
}
exports.PostSendSmsTestFailed = PostSendSmsTestFailed;
PostSendSmsTestFailed.discriminator = undefined;
PostSendSmsTestFailed.attributeTypeMap = [
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
        "name": "unexistingSms",
        "baseName": "unexistingSms",
        "type": "Array<string>"
    },
    {
        "name": "withoutListSms",
        "baseName": "withoutListSms",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=postSendSmsTestFailed.js.map