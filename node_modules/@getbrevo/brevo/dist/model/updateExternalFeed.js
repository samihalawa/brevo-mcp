"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExternalFeed = void 0;
class UpdateExternalFeed {
    constructor() {
        this['cache'] = false;
    }
    static getAttributeTypeMap() {
        return UpdateExternalFeed.attributeTypeMap;
    }
}
exports.UpdateExternalFeed = UpdateExternalFeed;
UpdateExternalFeed.discriminator = undefined;
UpdateExternalFeed.attributeTypeMap = [
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
        "type": "UpdateExternalFeed.AuthTypeEnum"
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
    }
];
(function (UpdateExternalFeed) {
    let AuthTypeEnum;
    (function (AuthTypeEnum) {
        AuthTypeEnum[AuthTypeEnum["Basic"] = 'basic'] = "Basic";
        AuthTypeEnum[AuthTypeEnum["Token"] = 'token'] = "Token";
        AuthTypeEnum[AuthTypeEnum["NoAuth"] = 'noAuth'] = "NoAuth";
    })(AuthTypeEnum = UpdateExternalFeed.AuthTypeEnum || (UpdateExternalFeed.AuthTypeEnum = {}));
})(UpdateExternalFeed = exports.UpdateExternalFeed || (exports.UpdateExternalFeed = {}));
//# sourceMappingURL=updateExternalFeed.js.map