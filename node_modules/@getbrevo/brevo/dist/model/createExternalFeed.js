"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateExternalFeed = void 0;
class CreateExternalFeed {
    constructor() {
        this['authType'] = CreateExternalFeed.AuthTypeEnum.NoAuth;
        this['cache'] = false;
    }
    static getAttributeTypeMap() {
        return CreateExternalFeed.attributeTypeMap;
    }
}
exports.CreateExternalFeed = CreateExternalFeed;
CreateExternalFeed.discriminator = undefined;
CreateExternalFeed.attributeTypeMap = [
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
        "type": "CreateExternalFeed.AuthTypeEnum"
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
(function (CreateExternalFeed) {
    let AuthTypeEnum;
    (function (AuthTypeEnum) {
        AuthTypeEnum[AuthTypeEnum["Basic"] = 'basic'] = "Basic";
        AuthTypeEnum[AuthTypeEnum["Token"] = 'token'] = "Token";
        AuthTypeEnum[AuthTypeEnum["NoAuth"] = 'noAuth'] = "NoAuth";
    })(AuthTypeEnum = CreateExternalFeed.AuthTypeEnum || (CreateExternalFeed.AuthTypeEnum = {}));
})(CreateExternalFeed = exports.CreateExternalFeed || (exports.CreateExternalFeed = {}));
//# sourceMappingURL=createExternalFeed.js.map