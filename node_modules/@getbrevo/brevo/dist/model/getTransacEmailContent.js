"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTransacEmailContent = void 0;
class GetTransacEmailContent {
    static getAttributeTypeMap() {
        return GetTransacEmailContent.attributeTypeMap;
    }
}
exports.GetTransacEmailContent = GetTransacEmailContent;
GetTransacEmailContent.discriminator = undefined;
GetTransacEmailContent.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "subject",
        "baseName": "subject",
        "type": "string"
    },
    {
        "name": "templateId",
        "baseName": "templateId",
        "type": "number"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<GetTransacEmailContentEventsInner>"
    },
    {
        "name": "body",
        "baseName": "body",
        "type": "string"
    },
    {
        "name": "attachmentCount",
        "baseName": "attachmentCount",
        "type": "number"
    }
];
//# sourceMappingURL=getTransacEmailContent.js.map