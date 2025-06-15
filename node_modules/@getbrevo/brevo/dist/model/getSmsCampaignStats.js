"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSmsCampaignStats = void 0;
class GetSmsCampaignStats {
    static getAttributeTypeMap() {
        return GetSmsCampaignStats.attributeTypeMap;
    }
}
exports.GetSmsCampaignStats = GetSmsCampaignStats;
GetSmsCampaignStats.discriminator = undefined;
GetSmsCampaignStats.attributeTypeMap = [
    {
        "name": "delivered",
        "baseName": "delivered",
        "type": "number"
    },
    {
        "name": "sent",
        "baseName": "sent",
        "type": "number"
    },
    {
        "name": "processing",
        "baseName": "processing",
        "type": "number"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "number"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "number"
    },
    {
        "name": "unsubscriptions",
        "baseName": "unsubscriptions",
        "type": "number"
    },
    {
        "name": "answered",
        "baseName": "answered",
        "type": "number"
    }
];
//# sourceMappingURL=getSmsCampaignStats.js.map