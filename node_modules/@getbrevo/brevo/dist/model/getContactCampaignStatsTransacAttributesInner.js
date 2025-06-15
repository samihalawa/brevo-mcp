"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetContactCampaignStatsTransacAttributesInner = void 0;
class GetContactCampaignStatsTransacAttributesInner {
    static getAttributeTypeMap() {
        return GetContactCampaignStatsTransacAttributesInner.attributeTypeMap;
    }
}
exports.GetContactCampaignStatsTransacAttributesInner = GetContactCampaignStatsTransacAttributesInner;
GetContactCampaignStatsTransacAttributesInner.discriminator = undefined;
GetContactCampaignStatsTransacAttributesInner.attributeTypeMap = [
    {
        "name": "orderDate",
        "baseName": "orderDate",
        "type": "string"
    },
    {
        "name": "orderPrice",
        "baseName": "orderPrice",
        "type": "number"
    },
    {
        "name": "orderId",
        "baseName": "orderId",
        "type": "number"
    }
];
//# sourceMappingURL=getContactCampaignStatsTransacAttributesInner.js.map