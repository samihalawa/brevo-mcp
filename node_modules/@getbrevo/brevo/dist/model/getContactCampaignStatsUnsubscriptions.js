"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetContactCampaignStatsUnsubscriptions = void 0;
class GetContactCampaignStatsUnsubscriptions {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsUnsubscriptions.attributeTypeMap;
    }
}
exports.GetContactCampaignStatsUnsubscriptions = GetContactCampaignStatsUnsubscriptions;
GetContactCampaignStatsUnsubscriptions.discriminator = undefined;
GetContactCampaignStatsUnsubscriptions.attributeTypeMap = [
    {
        "name": "userUnsubscription",
        "baseName": "userUnsubscription",
        "type": "Array<GetContactCampaignStatsUnsubscriptionsUserUnsubscriptionInner>"
    },
    {
        "name": "adminUnsubscription",
        "baseName": "adminUnsubscription",
        "type": "Array<GetContactCampaignStatsUnsubscriptionsAdminUnsubscriptionInner>"
    }
];
//# sourceMappingURL=getContactCampaignStatsUnsubscriptions.js.map