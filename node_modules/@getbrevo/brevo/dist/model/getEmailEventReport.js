"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEmailEventReport = void 0;
class GetEmailEventReport {
    static getAttributeTypeMap() {
        return GetEmailEventReport.attributeTypeMap;
    }
}
exports.GetEmailEventReport = GetEmailEventReport;
GetEmailEventReport.discriminator = undefined;
GetEmailEventReport.attributeTypeMap = [
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<GetEmailEventReportEventsInner>"
    }
];
//# sourceMappingURL=getEmailEventReport.js.map