"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTransacSmsReportReportsInner = void 0;
class GetTransacSmsReportReportsInner {
    static getAttributeTypeMap() {
        return GetTransacSmsReportReportsInner.attributeTypeMap;
    }
}
exports.GetTransacSmsReportReportsInner = GetTransacSmsReportReportsInner;
GetTransacSmsReportReportsInner.discriminator = undefined;
GetTransacSmsReportReportsInner.attributeTypeMap = [
    {
        "name": "date",
        "baseName": "date",
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
        "name": "blocked",
        "baseName": "blocked",
        "type": "number"
    },
    {
        "name": "unsubscribed",
        "baseName": "unsubscribed",
        "type": "number"
    },
    {
        "name": "replied",
        "baseName": "replied",
        "type": "number"
    },
    {
        "name": "accepted",
        "baseName": "accepted",
        "type": "number"
    },
    {
        "name": "rejected",
        "baseName": "rejected",
        "type": "number"
    },
    {
        "name": "skipped",
        "baseName": "skipped",
        "type": "number"
    }
];
//# sourceMappingURL=getTransacSmsReportReportsInner.js.map