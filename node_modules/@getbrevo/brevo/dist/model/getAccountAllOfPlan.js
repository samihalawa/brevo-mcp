"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccountAllOfPlan = void 0;
class GetAccountAllOfPlan {
    static getAttributeTypeMap() {
        return GetAccountAllOfPlan.attributeTypeMap;
    }
}
exports.GetAccountAllOfPlan = GetAccountAllOfPlan;
GetAccountAllOfPlan.discriminator = undefined;
GetAccountAllOfPlan.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "GetAccountAllOfPlan.TypeEnum"
    },
    {
        "name": "creditsType",
        "baseName": "creditsType",
        "type": "GetAccountAllOfPlan.CreditsTypeEnum"
    },
    {
        "name": "credits",
        "baseName": "credits",
        "type": "number"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "string"
    },
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "string"
    },
    {
        "name": "userLimit",
        "baseName": "userLimit",
        "type": "number"
    }
];
(function (GetAccountAllOfPlan) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["PayAsYouGo"] = 'payAsYouGo'] = "PayAsYouGo";
        TypeEnum[TypeEnum["Free"] = 'free'] = "Free";
        TypeEnum[TypeEnum["Subscription"] = 'subscription'] = "Subscription";
        TypeEnum[TypeEnum["Sms"] = 'sms'] = "Sms";
        TypeEnum[TypeEnum["Reseller"] = 'reseller'] = "Reseller";
    })(TypeEnum = GetAccountAllOfPlan.TypeEnum || (GetAccountAllOfPlan.TypeEnum = {}));
    let CreditsTypeEnum;
    (function (CreditsTypeEnum) {
        CreditsTypeEnum[CreditsTypeEnum["SendLimit"] = 'sendLimit'] = "SendLimit";
    })(CreditsTypeEnum = GetAccountAllOfPlan.CreditsTypeEnum || (GetAccountAllOfPlan.CreditsTypeEnum = {}));
})(GetAccountAllOfPlan = exports.GetAccountAllOfPlan || (exports.GetAccountAllOfPlan = {}));
//# sourceMappingURL=getAccountAllOfPlan.js.map