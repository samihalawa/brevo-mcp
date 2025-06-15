"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbTestVersionStats = void 0;
class AbTestVersionStats {
    static getAttributeTypeMap() {
        return AbTestVersionStats.attributeTypeMap;
    }
}
exports.AbTestVersionStats = AbTestVersionStats;
AbTestVersionStats.discriminator = undefined;
AbTestVersionStats.attributeTypeMap = [
    {
        "name": "versionA",
        "baseName": "Version A",
        "type": "string"
    },
    {
        "name": "versionB",
        "baseName": "Version B",
        "type": "string"
    }
];
//# sourceMappingURL=abTestVersionStats.js.map