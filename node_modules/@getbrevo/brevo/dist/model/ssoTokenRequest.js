"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SsoTokenRequest = void 0;
class SsoTokenRequest {
    static getAttributeTypeMap() {
        return SsoTokenRequest.attributeTypeMap;
    }
}
exports.SsoTokenRequest = SsoTokenRequest;
SsoTokenRequest.discriminator = undefined;
SsoTokenRequest.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "target",
        "baseName": "target",
        "type": "SsoTokenRequest.TargetEnum"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    }
];
(function (SsoTokenRequest) {
    let TargetEnum;
    (function (TargetEnum) {
        TargetEnum[TargetEnum["Automation"] = 'automation'] = "Automation";
        TargetEnum[TargetEnum["EmailCampaign"] = 'email_campaign'] = "EmailCampaign";
        TargetEnum[TargetEnum["Contacts"] = 'contacts'] = "Contacts";
        TargetEnum[TargetEnum["LandingPages"] = 'landing_pages'] = "LandingPages";
        TargetEnum[TargetEnum["EmailTransactional"] = 'email_transactional'] = "EmailTransactional";
        TargetEnum[TargetEnum["Senders"] = 'senders'] = "Senders";
        TargetEnum[TargetEnum["SmsCampaign"] = 'sms_campaign'] = "SmsCampaign";
        TargetEnum[TargetEnum["SmsTransactional"] = 'sms_transactional'] = "SmsTransactional";
    })(TargetEnum = SsoTokenRequest.TargetEnum || (SsoTokenRequest.TargetEnum = {}));
})(SsoTokenRequest = exports.SsoTokenRequest || (exports.SsoTokenRequest = {}));
//# sourceMappingURL=ssoTokenRequest.js.map