"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWhatsappCampaignOverview = void 0;
class GetWhatsappCampaignOverview {
    static getAttributeTypeMap() {
        return GetWhatsappCampaignOverview.attributeTypeMap;
    }
}
exports.GetWhatsappCampaignOverview = GetWhatsappCampaignOverview;
GetWhatsappCampaignOverview.discriminator = undefined;
GetWhatsappCampaignOverview.attributeTypeMap = [
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
        "name": "campaignStatus",
        "baseName": "campaignStatus",
        "type": "GetWhatsappCampaignOverview.CampaignStatusEnum"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "string"
    },
    {
        "name": "senderNumber",
        "baseName": "senderNumber",
        "type": "string"
    },
    {
        "name": "stats",
        "baseName": "stats",
        "type": "WhatsappCampStats"
    },
    {
        "name": "template",
        "baseName": "template",
        "type": "WhatsappCampTemplate"
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
(function (GetWhatsappCampaignOverview) {
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
    })(CampaignStatusEnum = GetWhatsappCampaignOverview.CampaignStatusEnum || (GetWhatsappCampaignOverview.CampaignStatusEnum = {}));
})(GetWhatsappCampaignOverview = exports.GetWhatsappCampaignOverview || (exports.GetWhatsappCampaignOverview = {}));
//# sourceMappingURL=getWhatsappCampaignOverview.js.map