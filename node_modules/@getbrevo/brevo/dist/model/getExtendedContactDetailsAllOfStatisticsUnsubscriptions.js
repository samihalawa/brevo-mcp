"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetExtendedContactDetailsAllOfStatisticsUnsubscriptions = void 0;
class GetExtendedContactDetailsAllOfStatisticsUnsubscriptions {
    static getAttributeTypeMap() {
        return GetExtendedContactDetailsAllOfStatisticsUnsubscriptions.attributeTypeMap;
    }
}
exports.GetExtendedContactDetailsAllOfStatisticsUnsubscriptions = GetExtendedContactDetailsAllOfStatisticsUnsubscriptions;
GetExtendedContactDetailsAllOfStatisticsUnsubscriptions.discriminator = undefined;
GetExtendedContactDetailsAllOfStatisticsUnsubscriptions.attributeTypeMap = [
    {
        "name": "userUnsubscription",
        "baseName": "userUnsubscription",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsUserUnsubscription>"
    },
    {
        "name": "adminUnsubscription",
        "baseName": "adminUnsubscription",
        "type": "Array<GetExtendedContactDetailsAllOfStatisticsUnsubscriptionsAdminUnsubscription>"
    }
];
//# sourceMappingURL=getExtendedContactDetailsAllOfStatisticsUnsubscriptions.js.map