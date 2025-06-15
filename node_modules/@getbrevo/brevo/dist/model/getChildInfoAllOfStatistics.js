"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetChildInfoAllOfStatistics = void 0;
class GetChildInfoAllOfStatistics {
    static getAttributeTypeMap() {
        return GetChildInfoAllOfStatistics.attributeTypeMap;
    }
}
exports.GetChildInfoAllOfStatistics = GetChildInfoAllOfStatistics;
GetChildInfoAllOfStatistics.discriminator = undefined;
GetChildInfoAllOfStatistics.attributeTypeMap = [
    {
        "name": "previousMonthTotalSent",
        "baseName": "previousMonthTotalSent",
        "type": "number"
    },
    {
        "name": "currentMonthTotalSent",
        "baseName": "currentMonthTotalSent",
        "type": "number"
    },
    {
        "name": "totalSent",
        "baseName": "totalSent",
        "type": "number"
    }
];
//# sourceMappingURL=getChildInfoAllOfStatistics.js.map