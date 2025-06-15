"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendTransacSms = void 0;
class SendTransacSms {
    constructor() {
        this['type'] = SendTransacSms.TypeEnum.Transactional;
        this['unicodeEnabled'] = false;
    }
    static getAttributeTypeMap() {
        return SendTransacSms.attributeTypeMap;
    }
}
exports.SendTransacSms = SendTransacSms;
SendTransacSms.discriminator = undefined;
SendTransacSms.attributeTypeMap = [
    {
        "name": "sender",
        "baseName": "sender",
        "type": "string"
    },
    {
        "name": "recipient",
        "baseName": "recipient",
        "type": "string"
    },
    {
        "name": "content",
        "baseName": "content",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "SendTransacSms.TypeEnum"
    },
    {
        "name": "tag",
        "baseName": "tag",
        "type": "string"
    },
    {
        "name": "webUrl",
        "baseName": "webUrl",
        "type": "string"
    },
    {
        "name": "unicodeEnabled",
        "baseName": "unicodeEnabled",
        "type": "boolean"
    },
    {
        "name": "organisationPrefix",
        "baseName": "organisationPrefix",
        "type": "string"
    }
];
(function (SendTransacSms) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Transactional"] = 'transactional'] = "Transactional";
        TypeEnum[TypeEnum["Marketing"] = 'marketing'] = "Marketing";
    })(TypeEnum = SendTransacSms.TypeEnum || (SendTransacSms.TypeEnum = {}));
})(SendTransacSms = exports.SendTransacSms || (exports.SendTransacSms = {}));
//# sourceMappingURL=sendTransacSms.js.map