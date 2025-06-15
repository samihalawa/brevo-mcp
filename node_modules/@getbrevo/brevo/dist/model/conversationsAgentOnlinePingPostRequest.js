"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationsAgentOnlinePingPostRequest = void 0;
class ConversationsAgentOnlinePingPostRequest {
    static getAttributeTypeMap() {
        return ConversationsAgentOnlinePingPostRequest.attributeTypeMap;
    }
}
exports.ConversationsAgentOnlinePingPostRequest = ConversationsAgentOnlinePingPostRequest;
ConversationsAgentOnlinePingPostRequest.discriminator = undefined;
ConversationsAgentOnlinePingPostRequest.attributeTypeMap = [
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
//# sourceMappingURL=conversationsAgentOnlinePingPostRequest.js.map