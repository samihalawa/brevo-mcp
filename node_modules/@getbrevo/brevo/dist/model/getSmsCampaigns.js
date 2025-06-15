"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSmsCampaigns = void 0;
class GetSmsCampaigns {
    static getAttributeTypeMap() {
        return GetSmsCampaigns.attributeTypeMap;
    }
}
exports.GetSmsCampaigns = GetSmsCampaigns;
GetSmsCampaigns.discriminator = undefined;
GetSmsCampaigns.attributeTypeMap = [
    {
        "name": "campaigns",
        "baseName": "campaigns",
        "type": "Array<GetSmsCampaignsCampaignsInner>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
//# sourceMappingURL=getSmsCampaigns.js.map