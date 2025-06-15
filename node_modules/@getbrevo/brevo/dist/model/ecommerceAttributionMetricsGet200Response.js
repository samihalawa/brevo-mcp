"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcommerceAttributionMetricsGet200Response = void 0;
class EcommerceAttributionMetricsGet200Response {
    static getAttributeTypeMap() {
        return EcommerceAttributionMetricsGet200Response.attributeTypeMap;
    }
}
exports.EcommerceAttributionMetricsGet200Response = EcommerceAttributionMetricsGet200Response;
EcommerceAttributionMetricsGet200Response.discriminator = undefined;
EcommerceAttributionMetricsGet200Response.attributeTypeMap = [
    {
        "name": "results",
        "baseName": "results",
        "type": "Array<ConversionSourceMetrics>"
    },
    {
        "name": "totals",
        "baseName": "totals",
        "type": "EcommerceAttributionMetricsGet200ResponseTotals"
    }
];
//# sourceMappingURL=ecommerceAttributionMetricsGet200Response.js.map