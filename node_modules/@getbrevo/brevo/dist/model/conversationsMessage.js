"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationsMessage = void 0;
class ConversationsMessage {
    static getAttributeTypeMap() {
        return ConversationsMessage.attributeTypeMap;
    }
}
exports.ConversationsMessage = ConversationsMessage;
ConversationsMessage.discriminator = undefined;
ConversationsMessage.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "ConversationsMessage.TypeEnum"
    },
    {
        "name": "text",
        "baseName": "text",
        "type": "string"
    },
    {
        "name": "visitorId",
        "baseName": "visitorId",
        "type": "string"
    },
    {
        "name": "agentId",
        "baseName": "agentId",
        "type": "string"
    },
    {
        "name": "agentName",
        "baseName": "agentName",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "number"
    },
    {
        "name": "isPushed",
        "baseName": "isPushed",
        "type": "boolean"
    },
    {
        "name": "receivedFrom",
        "baseName": "receivedFrom",
        "type": "string"
    },
    {
        "name": "file",
        "baseName": "file",
        "type": "ConversationsMessageFile"
    }
];
(function (ConversationsMessage) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Agent"] = 'agent'] = "Agent";
        TypeEnum[TypeEnum["Visitor"] = 'visitor'] = "Visitor";
    })(TypeEnum = ConversationsMessage.TypeEnum || (ConversationsMessage.TypeEnum = {}));
})(ConversationsMessage = exports.ConversationsMessage || (exports.ConversationsMessage = {}));
//# sourceMappingURL=conversationsMessage.js.map