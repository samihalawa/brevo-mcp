"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInboundEmailEventsEventsInner = void 0;
class GetInboundEmailEventsEventsInner {
    static getAttributeTypeMap() {
        return GetInboundEmailEventsEventsInner.attributeTypeMap;
    }
}
exports.GetInboundEmailEventsEventsInner = GetInboundEmailEventsEventsInner;
GetInboundEmailEventsEventsInner.discriminator = undefined;
GetInboundEmailEventsEventsInner.attributeTypeMap = [
    {
        "name": "uuid",
        "baseName": "uuid",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "Date"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
    },
    {
        "name": "recipient",
        "baseName": "recipient",
        "type": "string"
    }
];
//# sourceMappingURL=getInboundEmailEventsEventsInner.js.map