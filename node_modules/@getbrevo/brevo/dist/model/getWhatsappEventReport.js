"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWhatsappEventReport = void 0;
class GetWhatsappEventReport {
    static getAttributeTypeMap() {
        return GetWhatsappEventReport.attributeTypeMap;
    }
}
exports.GetWhatsappEventReport = GetWhatsappEventReport;
GetWhatsappEventReport.discriminator = undefined;
GetWhatsappEventReport.attributeTypeMap = [
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<GetWhatsappEventReportEventsInner>"
    }
];
//# sourceMappingURL=getWhatsappEventReport.js.map