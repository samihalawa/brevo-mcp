"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWhatsAppCampaignRecipients = void 0;
class CreateWhatsAppCampaignRecipients {
    static getAttributeTypeMap() {
        return CreateWhatsAppCampaignRecipients.attributeTypeMap;
    }
}
exports.CreateWhatsAppCampaignRecipients = CreateWhatsAppCampaignRecipients;
CreateWhatsAppCampaignRecipients.discriminator = undefined;
CreateWhatsAppCampaignRecipients.attributeTypeMap = [
    {
        "name": "excludedListIds",
        "baseName": "excludedListIds",
        "type": "Array<number>"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "segments",
        "baseName": "segments",
        "type": "Array<number>"
    }
];
//# sourceMappingURL=createWhatsAppCampaignRecipients.js.map