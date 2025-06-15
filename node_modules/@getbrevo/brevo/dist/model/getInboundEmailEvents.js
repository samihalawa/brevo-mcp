"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInboundEmailEvents = void 0;
class GetInboundEmailEvents {
    static getAttributeTypeMap() {
        return GetInboundEmailEvents.attributeTypeMap;
    }
}
exports.GetInboundEmailEvents = GetInboundEmailEvents;
GetInboundEmailEvents.discriminator = undefined;
GetInboundEmailEvents.attributeTypeMap = [
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<GetInboundEmailEventsEventsInner>"
    }
];
//# sourceMappingURL=getInboundEmailEvents.js.map