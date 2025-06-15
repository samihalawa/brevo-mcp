"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbTestCampaignResultClickedLinks = void 0;
class AbTestCampaignResultClickedLinks {
    static getAttributeTypeMap() {
        return AbTestCampaignResultClickedLinks.attributeTypeMap;
    }
}
exports.AbTestCampaignResultClickedLinks = AbTestCampaignResultClickedLinks;
AbTestCampaignResultClickedLinks.discriminator = undefined;
AbTestCampaignResultClickedLinks.attributeTypeMap = [
    {
        "name": "versionA",
        "baseName": "Version A",
        "type": "Array<AbTestVersionClicksInner>"
    },
    {
        "name": "versionB",
        "baseName": "Version B",
        "type": "Array<AbTestVersionClicksInner>"
    }
];
//# sourceMappingURL=abTestCampaignResultClickedLinks.js.map