"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWhatsappCampaigns = void 0;
class GetWhatsappCampaigns {
    static getAttributeTypeMap() {
        return GetWhatsappCampaigns.attributeTypeMap;
    }
}
exports.GetWhatsappCampaigns = GetWhatsappCampaigns;
GetWhatsappCampaigns.discriminator = undefined;
GetWhatsappCampaigns.attributeTypeMap = [
    {
        "name": "campaigns",
        "baseName": "campaigns",
        "type": "Array<GetWhatsappCampaignsCampaignsInner>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
//# sourceMappingURL=getWhatsappCampaigns.js.map