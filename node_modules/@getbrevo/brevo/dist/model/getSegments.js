"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSegments = void 0;
class GetSegments {
    static getAttributeTypeMap() {
        return GetSegments.attributeTypeMap;
    }
}
exports.GetSegments = GetSegments;
GetSegments.discriminator = undefined;
GetSegments.attributeTypeMap = [
    {
        "name": "segments",
        "baseName": "segments",
        "type": "GetSegmentsSegments"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
//# sourceMappingURL=getSegments.js.map