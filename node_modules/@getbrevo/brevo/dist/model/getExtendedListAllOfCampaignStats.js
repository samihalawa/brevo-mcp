"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetExtendedListAllOfCampaignStats = void 0;
class GetExtendedListAllOfCampaignStats {
    static getAttributeTypeMap() {
        return GetExtendedListAllOfCampaignStats.attributeTypeMap;
    }
}
exports.GetExtendedListAllOfCampaignStats = GetExtendedListAllOfCampaignStats;
GetExtendedListAllOfCampaignStats.discriminator = undefined;
GetExtendedListAllOfCampaignStats.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaignId",
        "type": "number"
    },
    {
        "name": "stats",
        "baseName": "stats",
        "type": "GetCampaignStats"
    }
];
//# sourceMappingURL=getExtendedListAllOfCampaignStats.js.map