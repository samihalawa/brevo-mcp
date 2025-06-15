"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWhatsAppCampaign = void 0;
class CreateWhatsAppCampaign {
    static getAttributeTypeMap() {
        return CreateWhatsAppCampaign.attributeTypeMap;
    }
}
exports.CreateWhatsAppCampaign = CreateWhatsAppCampaign;
CreateWhatsAppCampaign.discriminator = undefined;
CreateWhatsAppCampaign.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "string"
    },
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "CreateWhatsAppCampaignRecipients"
    }
];
//# sourceMappingURL=createWhatsAppCampaign.js.map