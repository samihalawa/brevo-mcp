"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationsPushedMessagesPostRequest = void 0;
class ConversationsPushedMessagesPostRequest {
    static getAttributeTypeMap() {
        return ConversationsPushedMessagesPostRequest.attributeTypeMap;
    }
}
exports.ConversationsPushedMessagesPostRequest = ConversationsPushedMessagesPostRequest;
ConversationsPushedMessagesPostRequest.discriminator = undefined;
ConversationsPushedMessagesPostRequest.attributeTypeMap = [
    {
        "name": "visitorId",
        "baseName": "visitorId",
        "type": "string"
    },
    {
        "name": "text",
        "baseName": "text",
        "type": "string"
    },
    {
        "name": "agentId",
        "baseName": "agentId",
        "type": "string"
    },
    {
        "name": "groupId",
        "baseName": "groupId",
        "type": "string"
    }
];
//# sourceMappingURL=conversationsPushedMessagesPostRequest.js.map