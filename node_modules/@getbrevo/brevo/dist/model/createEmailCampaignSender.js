"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmailCampaignSender = void 0;
class CreateEmailCampaignSender {
    static getAttributeTypeMap() {
        return CreateEmailCampaignSender.attributeTypeMap;
    }
}
exports.CreateEmailCampaignSender = CreateEmailCampaignSender;
CreateEmailCampaignSender.discriminator = undefined;
CreateEmailCampaignSender.attributeTypeMap = [
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
//# sourceMappingURL=createEmailCampaignSender.js.map