"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWhatsappCampaignsCampaignsInner = void 0;
class GetWhatsappCampaignsCampaignsInner {
    static getAttributeTypeMap() {
        return GetWhatsappCampaignsCampaignsInner.attributeTypeMap;
    }
}
exports.GetWhatsappCampaignsCampaignsInner = GetWhatsappCampaignsCampaignsInner;
GetWhatsappCampaignsCampaignsInner.discriminator = undefined;
GetWhatsappCampaignsCampaignsInner.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "campaignName",
        "baseName": "campaignName",
        "type": "string"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "string"
    },
    {
        "name": "campaignStatus",
        "baseName": "campaignStatus",
        "type": "GetWhatsappCampaignsCampaignsInner.CampaignStatusEnum"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "string"
    },
    {
        "name": "errorReason",
        "baseName": "errorReason",
        "type": "string"
    },
    {
        "name": "invalidatedContacts",
        "baseName": "invalidatedContacts",
        "type": "number"
    },
    {
        "name": "readPercentage",
        "baseName": "readPercentage",
        "type": "number"
    },
    {
        "name": "stats",
        "baseName": "stats",
        "type": "WhatsappCampStats"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "string"
    }
];
(function (GetWhatsappCampaignsCampaignsInner) {
    let CampaignStatusEnum;
    (function (CampaignStatusEnum) {
        CampaignStatusEnum[CampaignStatusEnum["Draft"] = 'draft'] = "Draft";
        CampaignStatusEnum[CampaignStatusEnum["Scheduled"] = 'scheduled'] = "Scheduled";
        CampaignStatusEnum[CampaignStatusEnum["Pending"] = 'pending'] = "Pending";
        CampaignStatusEnum[CampaignStatusEnum["Approved"] = 'approved'] = "Approved";
        CampaignStatusEnum[CampaignStatusEnum["Running"] = 'running'] = "Running";
        CampaignStatusEnum[CampaignStatusEnum["Suspended"] = 'suspended'] = "Suspended";
        CampaignStatusEnum[CampaignStatusEnum["Rejected"] = 'rejected'] = "Rejected";
        CampaignStatusEnum[CampaignStatusEnum["Sent"] = 'sent'] = "Sent";
    })(CampaignStatusEnum = GetWhatsappCampaignsCampaignsInner.CampaignStatusEnum || (GetWhatsappCampaignsCampaignsInner.CampaignStatusEnum = {}));
})(GetWhatsappCampaignsCampaignsInner = exports.GetWhatsappCampaignsCampaignsInner || (exports.GetWhatsappCampaignsCampaignsInner = {}));
//# sourceMappingURL=getWhatsappCampaignsCampaignsInner.js.map