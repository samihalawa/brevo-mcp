"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWebhooks = void 0;
class GetWebhooks {
    static getAttributeTypeMap() {
        return GetWebhooks.attributeTypeMap;
    }
}
exports.GetWebhooks = GetWebhooks;
GetWebhooks.discriminator = undefined;
GetWebhooks.attributeTypeMap = [
    {
        "name": "webhooks",
        "baseName": "webhooks",
        "type": "Array<GetWebhook>"
    }
];
//# sourceMappingURL=getWebhooks.js.map