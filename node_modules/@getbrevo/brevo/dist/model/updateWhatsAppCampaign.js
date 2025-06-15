"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWhatsAppCampaign = void 0;
class UpdateWhatsAppCampaign {
    constructor() {
        this['campaignStatus'] = UpdateWhatsAppCampaign.CampaignStatusEnum.Scheduled;
    }
    static getAttributeTypeMap() {
        return UpdateWhatsAppCampaign.attributeTypeMap;
    }
}
exports.UpdateWhatsAppCampaign = UpdateWhatsAppCampaign;
UpdateWhatsAppCampaign.discriminator = undefined;
UpdateWhatsAppCampaign.attributeTypeMap = [
    {
        "name": "campaignName",
        "baseName": "campaignName",
        "type": "string"
    },
    {
        "name": "campaignStatus",
        "baseName": "campaignStatus",
        "type": "UpdateWhatsAppCampaign.CampaignStatusEnum"
    },
    {
        "name": "rescheduleFor",
        "baseName": "rescheduleFor",
        "type": "string"
    },
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "CreateWhatsAppCampaignRecipients"
    }
];
(function (UpdateWhatsAppCampaign) {
    let CampaignStatusEnum;
    (function (CampaignStatusEnum) {
        CampaignStatusEnum[CampaignStatusEnum["Scheduled"] = 'scheduled'] = "Scheduled";
        CampaignStatusEnum[CampaignStatusEnum["Suspended"] = 'suspended'] = "Suspended";
    })(CampaignStatusEnum = UpdateWhatsAppCampaign.CampaignStatusEnum || (UpdateWhatsAppCampaign.CampaignStatusEnum = {}));
})(UpdateWhatsAppCampaign = exports.UpdateWhatsAppCampaign || (exports.UpdateWhatsAppCampaign = {}));
//# sourceMappingURL=updateWhatsAppCampaign.js.map