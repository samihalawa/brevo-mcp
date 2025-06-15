"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInboundEmailEventsByUuid = void 0;
class GetInboundEmailEventsByUuid {
    static getAttributeTypeMap() {
        return GetInboundEmailEventsByUuid.attributeTypeMap;
    }
}
exports.GetInboundEmailEventsByUuid = GetInboundEmailEventsByUuid;
GetInboundEmailEventsByUuid.discriminator = undefined;
GetInboundEmailEventsByUuid.attributeTypeMap = [
    {
        "name": "receivedAt",
        "baseName": "receivedAt",
        "type": "Date"
    },
    {
        "name": "deliveredAt",
        "baseName": "deliveredAt",
        "type": "Date"
    },
    {
        "name": "recipient",
        "baseName": "recipient",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
    },
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "attachments",
        "baseName": "attachments",
        "type": "Array<GetInboundEmailEventsByUuidAttachmentsInner>"
    },
    {
        "name": "logs",
        "baseName": "logs",
        "type": "Array<GetInboundEmailEventsByUuidLogsInner>"
    }
];
//# sourceMappingURL=getInboundEmailEventsByUuid.js.map