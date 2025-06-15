"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCampaignRecipients = void 0;
class GetCampaignRecipients {
    static getAttributeTypeMap() {
        return GetCampaignRecipients.attributeTypeMap;
    }
}
exports.GetCampaignRecipients = GetCampaignRecipients;
GetCampaignRecipients.discriminator = undefined;
GetCampaignRecipients.attributeTypeMap = [
    {
        "name": "lists",
        "baseName": "lists",
        "type": "Array<number>"
    },
    {
        "name": "exclusionLists",
        "baseName": "exclusionLists",
        "type": "Array<number>"
    }
];
//# sourceMappingURL=getCampaignRecipients.js.map