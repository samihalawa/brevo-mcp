"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWebhook = void 0;
class GetWebhook {
    static getAttributeTypeMap() {
        return GetWebhook.attributeTypeMap;
    }
}
exports.GetWebhook = GetWebhook;
GetWebhook.discriminator = undefined;
GetWebhook.attributeTypeMap = [
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "events",
        "baseName": "events",
        "type": "Array<string>"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "GetWebhook.TypeEnum"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "string"
    },
    {
        "name": "batched",
        "baseName": "batched",
        "type": "boolean"
    },
    {
        "name": "auth",
        "baseName": "auth",
        "type": "GetWebhookAuth"
    },
    {
        "name": "headers",
        "baseName": "headers",
        "type": "Array<GetWebhookHeadersInner>"
    }
];
(function (GetWebhook) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Marketing"] = 'marketing'] = "Marketing";
        TypeEnum[TypeEnum["Transactional"] = 'transactional'] = "Transactional";
    })(TypeEnum = GetWebhook.TypeEnum || (GetWebhook.TypeEnum = {}));
})(GetWebhook = exports.GetWebhook || (exports.GetWebhook = {}));
//# sourceMappingURL=getWebhook.js.map