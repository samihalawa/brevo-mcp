"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSmsCampaignsCampaignsInner = void 0;
class GetSmsCampaignsCampaignsInner {
    static getAttributeTypeMap() {
        return GetSmsCampaignsCampaignsInner.attributeTypeMap;
    }
}
exports.GetSmsCampaignsCampaignsInner = GetSmsCampaignsCampaignsInner;
GetSmsCampaignsCampaignsInner.discriminator = undefined;
GetSmsCampaignsCampaignsInner.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetSmsCampaignsCampaignsInner.StatusEnum"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "scheduledAt",
        "baseName": "scheduledAt",
        "type": "string"
    },
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
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
    },
    {
        "name": "recipients",
        "baseName": "recipients",
        "type": "GetCampaignRecipients"
    },
    {
        "name": "statistics",
        "baseName": "statistics",
        "type": "GetSmsCampaignStats"
    }
];
(function (GetSmsCampaignsCampaignsInner) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Draft"] = 'draft'] = "Draft";
        StatusEnum[StatusEnum["Sent"] = 'sent'] = "Sent";
        StatusEnum[StatusEnum["Archive"] = 'archive'] = "Archive";
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["Suspended"] = 'suspended'] = "Suspended";
        StatusEnum[StatusEnum["InProcess"] = 'inProcess'] = "InProcess";
    })(StatusEnum = GetSmsCampaignsCampaignsInner.StatusEnum || (GetSmsCampaignsCampaignsInner.StatusEnum = {}));
})(GetSmsCampaignsCampaignsInner = exports.GetSmsCampaignsCampaignsInner || (exports.GetSmsCampaignsCampaignsInner = {}));
//# sourceMappingURL=getSmsCampaignsCampaignsInner.js.map