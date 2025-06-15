"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllExternalFeeds = void 0;
class GetAllExternalFeeds {
    static getAttributeTypeMap() {
        return GetAllExternalFeeds.attributeTypeMap;
    }
}
exports.GetAllExternalFeeds = GetAllExternalFeeds;
GetAllExternalFeeds.discriminator = undefined;
GetAllExternalFeeds.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "feeds",
        "baseName": "feeds",
        "type": "Array<GetAllExternalFeedsFeedsInner>"
    }
];
//# sourceMappingURL=getAllExternalFeeds.js.map