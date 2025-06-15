"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllExternalFeedsFeedsInner = void 0;
class GetAllExternalFeedsFeedsInner {
    static getAttributeTypeMap() {
        return GetAllExternalFeedsFeedsInner.attributeTypeMap;
    }
}
exports.GetAllExternalFeedsFeedsInner = GetAllExternalFeedsFeedsInner;
GetAllExternalFeedsFeedsInner.discriminator = undefined;
GetAllExternalFeedsFeedsInner.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "authType",
        "baseName": "authType",
        "type": "GetAllExternalFeedsFeedsInner.AuthTypeEnum"
    },
    {
        "name": "username",
        "baseName": "username",
        "type": "string"
    },
    {
        "name": "password",
        "baseName": "password",
        "type": "string"
    },
    {
        "name": "token",
        "baseName": "token",
        "type": "string"
    },
    {
        "name": "headers",
        "baseName": "headers",
        "type": "Array<GetExternalFeedByUUIDHeadersInner>"
    },
    {
        "name": "maxRetries",
        "baseName": "maxRetries",
        "type": "number"
    },
    {
        "name": "cache",
        "baseName": "cache",
        "type": "boolean"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "modifiedAt",
        "baseName": "modifiedAt",
        "type": "Date"
    }
];
(function (GetAllExternalFeedsFeedsInner) {
    let AuthTypeEnum;
    (function (AuthTypeEnum) {
        AuthTypeEnum[AuthTypeEnum["Basic"] = 'basic'] = "Basic";
        AuthTypeEnum[AuthTypeEnum["Token"] = 'token'] = "Token";
        AuthTypeEnum[AuthTypeEnum["NoAuth"] = 'noAuth'] = "NoAuth";
    })(AuthTypeEnum = GetAllExternalFeedsFeedsInner.AuthTypeEnum || (GetAllExternalFeedsFeedsInner.AuthTypeEnum = {}));
})(GetAllExternalFeedsFeedsInner = exports.GetAllExternalFeedsFeedsInner || (exports.GetAllExternalFeedsFeedsInner = {}));
//# sourceMappingURL=getAllExternalFeedsFeedsInner.js.map