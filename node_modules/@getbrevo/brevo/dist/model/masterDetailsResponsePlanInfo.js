"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterDetailsResponsePlanInfo = void 0;
class MasterDetailsResponsePlanInfo {
    static getAttributeTypeMap() {
        return MasterDetailsResponsePlanInfo.attributeTypeMap;
    }
}
exports.MasterDetailsResponsePlanInfo = MasterDetailsResponsePlanInfo;
MasterDetailsResponsePlanInfo.discriminator = undefined;
MasterDetailsResponsePlanInfo.attributeTypeMap = [
    {
        "name": "currencyCode",
        "baseName": "currencyCode",
        "type": "string"
    },
    {
        "name": "nextBillingAt",
        "baseName": "nextBillingAt",
        "type": "number"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "number"
    },
    {
        "name": "planPeriod",
        "baseName": "planPeriod",
        "type": "MasterDetailsResponsePlanInfo.PlanPeriodEnum"
    },
    {
        "name": "subAccounts",
        "baseName": "subAccounts",
        "type": "number"
    },
    {
        "name": "features",
        "baseName": "features",
        "type": "Array<MasterDetailsResponsePlanInfoFeaturesInner>"
    }
];
(function (MasterDetailsResponsePlanInfo) {
    let PlanPeriodEnum;
    (function (PlanPeriodEnum) {
        PlanPeriodEnum[PlanPeriodEnum["Month"] = 'month'] = "Month";
        PlanPeriodEnum[PlanPeriodEnum["Year"] = 'year'] = "Year";
    })(PlanPeriodEnum = MasterDetailsResponsePlanInfo.PlanPeriodEnum || (MasterDetailsResponsePlanInfo.PlanPeriodEnum = {}));
})(MasterDetailsResponsePlanInfo = exports.MasterDetailsResponsePlanInfo || (exports.MasterDetailsResponsePlanInfo = {}));
//# sourceMappingURL=masterDetailsResponsePlanInfo.js.map