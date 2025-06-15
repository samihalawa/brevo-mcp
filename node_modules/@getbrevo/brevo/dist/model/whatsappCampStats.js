"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappCampStats = void 0;
class WhatsappCampStats {
    static getAttributeTypeMap() {
        return WhatsappCampStats.attributeTypeMap;
    }
}
exports.WhatsappCampStats = WhatsappCampStats;
WhatsappCampStats.discriminator = undefined;
WhatsappCampStats.attributeTypeMap = [
    {
        "name": "sent",
        "baseName": "sent",
        "type": "number"
    },
    {
        "name": "delivered",
        "baseName": "delivered",
        "type": "number"
    },
    {
        "name": "read",
        "baseName": "read",
        "type": "number"
    },
    {
        "name": "unsubscribe",
        "baseName": "unsubscribe",
        "type": "number"
    },
    {
        "name": "notSent",
        "baseName": "not_sent",
        "type": "number"
    }
];
//# sourceMappingURL=whatsappCampStats.js.map