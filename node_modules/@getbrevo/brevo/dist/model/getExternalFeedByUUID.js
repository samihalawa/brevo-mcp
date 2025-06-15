"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetExternalFeedByUUID = void 0;
class GetExternalFeedByUUID {
    static getAttributeTypeMap() {
        return GetExternalFeedByUUID.attributeTypeMap;
    }
}
exports.GetExternalFeedByUUID = GetExternalFeedByUUID;
GetExternalFeedByUUID.discriminator = undefined;
GetExternalFeedByUUID.attributeTypeMap = [
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
        "type": "GetExternalFeedByUUID.AuthTypeEnum"
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
(function (GetExternalFeedByUUID) {
    let AuthTypeEnum;
    (function (AuthTypeEnum) {
        AuthTypeEnum[AuthTypeEnum["Basic"] = 'basic'] = "Basic";
        AuthTypeEnum[AuthTypeEnum["Token"] = 'token'] = "Token";
        AuthTypeEnum[AuthTypeEnum["NoAuth"] = 'noAuth'] = "NoAuth";
    })(AuthTypeEnum = GetExternalFeedByUUID.AuthTypeEnum || (GetExternalFeedByUUID.AuthTypeEnum = {}));
})(GetExternalFeedByUUID = exports.GetExternalFeedByUUID || (exports.GetExternalFeedByUUID = {}));
//# sourceMappingURL=getExternalFeedByUUID.js.map