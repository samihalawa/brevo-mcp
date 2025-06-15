"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAggregatedReport = void 0;
class GetAggregatedReport {
    static getAttributeTypeMap() {
        return GetAggregatedReport.attributeTypeMap;
    }
}
exports.GetAggregatedReport = GetAggregatedReport;
GetAggregatedReport.discriminator = undefined;
GetAggregatedReport.attributeTypeMap = [
    {
        "name": "range",
        "baseName": "range",
        "type": "string"
    },
    {
        "name": "requests",
        "baseName": "requests",
        "type": "number"
    },
    {
        "name": "delivered",
        "baseName": "delivered",
        "type": "number"
    },
    {
        "name": "hardBounces",
        "baseName": "hardBounces",
        "type": "number"
    },
    {
        "name": "softBounces",
        "baseName": "softBounces",
        "type": "number"
    },
    {
        "name": "clicks",
        "baseName": "clicks",
        "type": "number"
    },
    {
        "name": "uniqueClicks",
        "baseName": "uniqueClicks",
        "type": "number"
    },
    {
        "name": "opens",
        "baseName": "opens",
        "type": "number"
    },
    {
        "name": "uniqueOpens",
        "baseName": "uniqueOpens",
        "type": "number"
    },
    {
        "name": "spamReports",
        "baseName": "spamReports",
        "type": "number"
    },
    {
        "name": "blocked",
        "baseName": "blocked",
        "type": "number"
    },
    {
        "name": "invalid",
        "baseName": "invalid",
        "type": "number"
    },
    {
        "name": "unsubscribed",
        "baseName": "unsubscribed",
        "type": "number"
    }
];
//# sourceMappingURL=getAggregatedReport.js.map