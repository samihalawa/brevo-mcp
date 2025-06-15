"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSmsCampaign = void 0;
class UpdateSmsCampaign {
    constructor() {
        this['unicodeEnabled'] = false;
    }
    static getAttributeTypeMap() {
        return UpdateSmsCampaign.attributeTypeMap;
    }
}
exports.UpdateSmsCampaign = UpdateSmsCampaign;
UpdateSmsCampaign.discriminator = undefined;
UpdateSmsCampaign.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "CreateSmsCampaignRecipients"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "string"
    },
    {
        "name": "unicodeEnabled",
        "baseName": "unicodeEnabled",
        "type": "boolean"
    },
    {
        "name": "organisationPrefix",
        "baseName": "organisationPrefix",
        "type": "string"
    },
    {
        "name": "unsubscribeInstruction",
        "baseName": "unsubscribeInstruction",
        "type": "string"
    }
];
//# sourceMappingURL=updateSmsCampaign.js.map