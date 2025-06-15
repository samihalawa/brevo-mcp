"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmailCampaignRecipients = void 0;
class CreateEmailCampaignRecipients {
    static getAttributeTypeMap() {
        return CreateEmailCampaignRecipients.attributeTypeMap;
    }
}
exports.CreateEmailCampaignRecipients = CreateEmailCampaignRecipients;
CreateEmailCampaignRecipients.discriminator = undefined;
CreateEmailCampaignRecipients.attributeTypeMap = [
    {
        "name": "exclusionListIds",
        "baseName": "exclusionListIds",
        "type": "Array<number>"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "segmentIds",
        "baseName": "segmentIds",
        "type": "Array<number>"
    }
];
//# sourceMappingURL=createEmailCampaignRecipients.js.map