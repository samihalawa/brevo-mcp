"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetContactCampaignStats = void 0;
class GetContactCampaignStats {
    static getAttributeTypeMap() {
        return GetContactCampaignStats.attributeTypeMap;
    }
}
exports.GetContactCampaignStats = GetContactCampaignStats;
GetContactCampaignStats.discriminator = undefined;
GetContactCampaignStats.attributeTypeMap = [
    {
        "name": "messagesSent",
        "baseName": "messagesSent",
        "type": "Array<GetContactCampaignStatsMessagesSentInner>"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "Array<GetContactCampaignStatsMessagesSentInner>"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "Array<GetContactCampaignStatsMessagesSentInner>"
    },
    {
        "name": "complaints",
        "baseName": "complaints",
        "type": "Array<GetContactCampaignStatsMessagesSentInner>"
    },
    {
        "name": "unsubscriptions",
        "baseName": "unsubscriptions",
        "type": "GetContactCampaignStatsUnsubscriptions"
    },
    {
        "name": "opened",
        "baseName": "opened",
        "type": "Array<GetContactCampaignStatsOpenedInner>"
    },
    {
        "name": "clicked",
        "baseName": "clicked",
        "type": "Array<GetContactCampaignStatsClickedInner>"
    },
    {
        "name": "transacAttributes",
        "baseName": "transacAttributes",
        "type": "Array<GetContactCampaignStatsTransacAttributesInner>"
    },
    {
        "name": "delivered",
        "baseName": "delivered",
        "type": "Array<GetContactCampaignStatsMessagesSentInner>"
    }
];
//# sourceMappingURL=getContactCampaignStats.js.map