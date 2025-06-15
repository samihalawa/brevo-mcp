"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmailCampaignSender = void 0;
class UpdateEmailCampaignSender {
    static getAttributeTypeMap() {
        return UpdateEmailCampaignSender.attributeTypeMap;
    }
}
exports.UpdateEmailCampaignSender = UpdateEmailCampaignSender;
UpdateEmailCampaignSender.discriminator = undefined;
UpdateEmailCampaignSender.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
//# sourceMappingURL=updateEmailCampaignSender.js.map