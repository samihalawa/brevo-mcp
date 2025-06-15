"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDeviceBrowserStats = void 0;
class GetDeviceBrowserStats {
    static getAttributeTypeMap() {
        return GetDeviceBrowserStats.attributeTypeMap;
    }
}
exports.GetDeviceBrowserStats = GetDeviceBrowserStats;
GetDeviceBrowserStats.discriminator = undefined;
GetDeviceBrowserStats.attributeTypeMap = [
    {
        "name": "clickers",
        "baseName": "clickers",
        "type": "number"
    },
    {
        "name": "uniqueClicks",
        "baseName": "uniqueClicks",
        "type": "number"
    },
    {
        "name": "viewed",
        "baseName": "viewed",
        "type": "number"
    },
    {
        "name": "uniqueViews",
        "baseName": "uniqueViews",
        "type": "number"
    }
];
//# sourceMappingURL=getDeviceBrowserStats.js.map