"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWATemplates = void 0;
class GetWATemplates {
    static getAttributeTypeMap() {
        return GetWATemplates.attributeTypeMap;
    }
}
exports.GetWATemplates = GetWATemplates;
GetWATemplates.discriminator = undefined;
GetWATemplates.attributeTypeMap = [
    {
        "name": "templates",
        "baseName": "templates",
        "type": "Array<GetWATemplatesTemplatesInner>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
//# sourceMappingURL=getWATemplates.js.map