"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestContactImport = void 0;
class RequestContactImport {
    constructor() {
        this['emailBlacklist'] = false;
        this['disableNotification'] = false;
        this['smsBlacklist'] = false;
        this['updateExistingContacts'] = true;
        this['emptyContactsAttributes'] = false;
    }
    static getAttributeTypeMap() {
        return RequestContactImport.attributeTypeMap;
    }
}
exports.RequestContactImport = RequestContactImport;
RequestContactImport.discriminator = undefined;
RequestContactImport.attributeTypeMap = [
    {
        "name": "fileUrl",
        "baseName": "fileUrl",
        "type": "string"
    },
    {
        "name": "fileBody",
        "baseName": "fileBody",
        "type": "string"
    },
    {
        "name": "jsonBody",
        "baseName": "jsonBody",
        "type": "Array<RequestContactImportJsonBodyInner>"
    },
    {
        "name": "listIds",
        "baseName": "listIds",
        "type": "Array<number>"
    },
    {
        "name": "notifyUrl",
        "baseName": "notifyUrl",
        "type": "string"
    },
    {
        "name": "newList",
        "baseName": "newList",
        "type": "RequestContactImportNewList"
    },
    {
        "name": "emailBlacklist",
        "baseName": "emailBlacklist",
        "type": "boolean"
    },
    {
        "name": "disableNotification",
        "baseName": "disableNotification",
        "type": "boolean"
    },
    {
        "name": "smsBlacklist",
        "baseName": "smsBlacklist",
        "type": "boolean"
    },
    {
        "name": "updateExistingContacts",
        "baseName": "updateExistingContacts",
        "type": "boolean"
    },
    {
        "name": "emptyContactsAttributes",
        "baseName": "emptyContactsAttributes",
        "type": "boolean"
    }
];
//# sourceMappingURL=requestContactImport.js.map