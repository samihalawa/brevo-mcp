"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionSourceMetrics = void 0;
class ConversionSourceMetrics {
    static getAttributeTypeMap() {
        return ConversionSourceMetrics.attributeTypeMap;
    }
}
exports.ConversionSourceMetrics = ConversionSourceMetrics;
ConversionSourceMetrics.discriminator = undefined;
ConversionSourceMetrics.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "conversionSource",
        "baseName": "conversionSource",
        "type": "ConversionSourceMetrics.ConversionSourceEnum"
    },
    {
        "name": "ordersCount",
        "baseName": "ordersCount",
        "type": "number"
    },
    {
        "name": "revenue",
        "baseName": "revenue",
        "type": "number"
    },
    {
        "name": "averageBasket",
        "baseName": "averageBasket",
        "type": "number"
    }
];
(function (ConversionSourceMetrics) {
    let ConversionSourceEnum;
    (function (ConversionSourceEnum) {
        ConversionSourceEnum[ConversionSourceEnum["EmailCampaign"] = 'email_campaign'] = "EmailCampaign";
    })(ConversionSourceEnum = ConversionSourceMetrics.ConversionSourceEnum || (ConversionSourceMetrics.ConversionSourceEnum = {}));
})(ConversionSourceMetrics = exports.ConversionSourceMetrics || (exports.ConversionSourceMetrics = {}));
//# sourceMappingURL=conversionSourceMetrics.js.map