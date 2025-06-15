"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmailCampaignRecipients = void 0;
class UpdateEmailCampaignRecipients {
    static getAttributeTypeMap() {
        return UpdateEmailCampaignRecipients.attributeTypeMap;
    }
}
exports.UpdateEmailCampaignRecipients = UpdateEmailCampaignRecipients;
UpdateEmailCampaignRecipients.discriminator = undefined;
UpdateEmailCampaignRecipients.attributeTypeMap = [
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
//# sourceMappingURL=updateEmailCampaignRecipients.js.map