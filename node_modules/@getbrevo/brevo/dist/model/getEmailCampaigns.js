"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEmailCampaigns = void 0;
class GetEmailCampaigns {
    static getAttributeTypeMap() {
        return GetEmailCampaigns.attributeTypeMap;
    }
}
exports.GetEmailCampaigns = GetEmailCampaigns;
GetEmailCampaigns.discriminator = undefined;
GetEmailCampaigns.attributeTypeMap = [
    {
        "name": "campaigns",
        "baseName": "campaigns",
        "type": "Array<GetEmailCampaignsCampaignsInner>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
//# sourceMappingURL=getEmailCampaigns.js.map