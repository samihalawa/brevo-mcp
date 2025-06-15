"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSmsCampaignRecipients = void 0;
class CreateSmsCampaignRecipients {
    static getAttributeTypeMap() {
        return CreateSmsCampaignRecipients.attributeTypeMap;
    }
}
exports.CreateSmsCampaignRecipients = CreateSmsCampaignRecipients;
CreateSmsCampaignRecipients.discriminator = undefined;
CreateSmsCampaignRecipients.attributeTypeMap = [
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "exclusionListIds",
        "baseName": "exclusionListIds",
        "type": "Array<number>"
    }
];
//# sourceMappingURL=createSmsCampaignRecipients.js.map