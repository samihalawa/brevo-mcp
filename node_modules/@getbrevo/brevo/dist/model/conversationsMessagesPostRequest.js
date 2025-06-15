"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationsMessagesPostRequest = void 0;
class ConversationsMessagesPostRequest {
    static getAttributeTypeMap() {
        return ConversationsMessagesPostRequest.attributeTypeMap;
    }
}
exports.ConversationsMessagesPostRequest = ConversationsMessagesPostRequest;
ConversationsMessagesPostRequest.discriminator = undefined;
ConversationsMessagesPostRequest.attributeTypeMap = [
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
        "name": "receivedFrom",
        "baseName": "receivedFrom",
        "type": "string"
    },
    {
        "name": "agentEmail",
        "baseName": "agentEmail",
        "type": "string"
    },
    {
        "name": "agentName",
        "baseName": "agentName",
        "type": "string"
    }
];
//# sourceMappingURL=conversationsMessagesPostRequest.js.map