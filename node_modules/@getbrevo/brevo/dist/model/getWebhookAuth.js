"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWebhookAuth = void 0;
class GetWebhookAuth {
    static getAttributeTypeMap() {
        return GetWebhookAuth.attributeTypeMap;
    }
}
exports.GetWebhookAuth = GetWebhookAuth;
GetWebhookAuth.discriminator = undefined;
GetWebhookAuth.attributeTypeMap = [
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "token",
        "baseName": "token",
        "type": "string"
    }
];
//# sourceMappingURL=getWebhookAuth.js.map