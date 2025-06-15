"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSmsEventReport = void 0;
class GetSmsEventReport {
    static getAttributeTypeMap() {
        return GetSmsEventReport.attributeTypeMap;
    }
}
exports.GetSmsEventReport = GetSmsEventReport;
GetSmsEventReport.discriminator = undefined;
GetSmsEventReport.attributeTypeMap = [
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<GetSmsEventReportEventsInner>"
    }
];
//# sourceMappingURL=getSmsEventReport.js.map