"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetContactCampaignStatsClickedInner = void 0;
class GetContactCampaignStatsClickedInner {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsClickedInner.attributeTypeMap;
    }
}
exports.GetContactCampaignStatsClickedInner = GetContactCampaignStatsClickedInner;
GetContactCampaignStatsClickedInner.discriminator = undefined;
GetContactCampaignStatsClickedInner.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaignId",
        "type": "number"
    },
    {
        "name": "links",
        "baseName": "links",
        "type": "Array<GetContactCampaignStatsClickedInnerLinksInner>"
    }
];
//# sourceMappingURL=getContactCampaignStatsClickedInner.js.map