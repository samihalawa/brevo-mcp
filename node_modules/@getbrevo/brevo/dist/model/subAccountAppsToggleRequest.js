"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAccountAppsToggleRequest = void 0;
class SubAccountAppsToggleRequest {
    static getAttributeTypeMap() {
        return SubAccountAppsToggleRequest.attributeTypeMap;
    }
}
exports.SubAccountAppsToggleRequest = SubAccountAppsToggleRequest;
SubAccountAppsToggleRequest.discriminator = undefined;
SubAccountAppsToggleRequest.attributeTypeMap = [
    {
        "name": "inbox",
        "baseName": "inbox",
        "type": "boolean"
    },
    {
        "name": "whatsapp",
        "baseName": "whatsapp",
        "type": "boolean"
    },
    {
        "name": "automation",
        "baseName": "automation",
        "type": "boolean"
    },
    {
        "name": "emailCampaigns",
        "baseName": "email-campaigns",
        "type": "boolean"
    },
    {
        "name": "smsCampaigns",
        "baseName": "sms-campaigns",
        "type": "boolean"
    },
    {
        "name": "landingPages",
        "baseName": "landing-pages",
        "type": "boolean"
    },
    {
        "name": "transactionalEmails",
        "baseName": "transactional-emails",
        "type": "boolean"
    },
    {
        "name": "transactionalSms",
        "baseName": "transactional-sms",
        "type": "boolean"
    },
    {
        "name": "facebookAds",
        "baseName": "facebook-ads",
        "type": "boolean"
    },
    {
        "name": "webPush",
        "baseName": "web-push",
        "type": "boolean"
    },
    {
        "name": "meetings",
        "baseName": "meetings",
        "type": "boolean"
    },
    {
        "name": "conversations",
        "baseName": "conversations",
        "type": "boolean"
    },
    {
        "name": "crm",
        "baseName": "crm",
        "type": "boolean"
    }
];
//# sourceMappingURL=subAccountAppsToggleRequest.js.map