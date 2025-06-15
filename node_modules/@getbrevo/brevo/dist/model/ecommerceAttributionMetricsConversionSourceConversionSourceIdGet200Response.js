"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response = void 0;
class EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response {
    static getAttributeTypeMap() {
        return EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response.attributeTypeMap;
    }
}
exports.EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response = EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response;
EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response.discriminator = undefined;
EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "conversionSource",
        "baseName": "conversionSource",
        "type": "EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response.ConversionSourceEnum"
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
    },
    {
        "name": "newCustomersCount",
        "baseName": "newCustomersCount",
        "type": "number"
    }
];
(function (EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response) {
    let ConversionSourceEnum;
    (function (ConversionSourceEnum) {
        ConversionSourceEnum[ConversionSourceEnum["EmailCampaign"] = 'email_campaign'] = "EmailCampaign";
    })(ConversionSourceEnum = EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response.ConversionSourceEnum || (EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response.ConversionSourceEnum = {}));
})(EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response = exports.EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response || (exports.EcommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response = {}));
//# sourceMappingURL=ecommerceAttributionMetricsConversionSourceConversionSourceIdGet200Response.js.map