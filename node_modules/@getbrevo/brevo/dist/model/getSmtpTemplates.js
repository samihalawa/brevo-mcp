"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSmtpTemplates = void 0;
class GetSmtpTemplates {
    static getAttributeTypeMap() {
        return GetSmtpTemplates.attributeTypeMap;
    }
}
exports.GetSmtpTemplates = GetSmtpTemplates;
GetSmtpTemplates.discriminator = undefined;
GetSmtpTemplates.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "templates",
        "baseName": "templates",
        "type": "Array<GetSmtpTemplateOverview>"
    }
];
//# sourceMappingURL=getSmtpTemplates.js.map