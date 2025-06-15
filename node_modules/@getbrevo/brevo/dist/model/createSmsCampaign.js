"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSmsCampaign = void 0;
class CreateSmsCampaign {
    constructor() {
        this['unicodeEnabled'] = false;
    }
    static getAttributeTypeMap() {
        return CreateSmsCampaign.attributeTypeMap;
    }
}
exports.CreateSmsCampaign = CreateSmsCampaign;
CreateSmsCampaign.discriminator = undefined;
CreateSmsCampaign.attributeTypeMap = [
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
//# sourceMappingURL=createSmsCampaign.js.map