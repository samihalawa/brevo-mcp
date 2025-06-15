"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetContactCampaignStatsOpenedInner = void 0;
class GetContactCampaignStatsOpenedInner {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsOpenedInner.attributeTypeMap;
    }
}
exports.GetContactCampaignStatsOpenedInner = GetContactCampaignStatsOpenedInner;
GetContactCampaignStatsOpenedInner.discriminator = undefined;
GetContactCampaignStatsOpenedInner.attributeTypeMap = [
    {
        "name": "campaignId",
        "baseName": "campaignId",
        "type": "number"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "eventTime",
        "baseName": "eventTime",
        "type": "string"
    },
    {
        "name": "ip",
        "baseName": "ip",
        "type": "string"
    }
];
//# sourceMappingURL=getContactCampaignStatsOpenedInner.js.map