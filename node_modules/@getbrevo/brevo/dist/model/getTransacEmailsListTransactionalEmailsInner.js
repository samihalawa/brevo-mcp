"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTransacEmailsListTransactionalEmailsInner = void 0;
class GetTransacEmailsListTransactionalEmailsInner {
    static getAttributeTypeMap() {
        return GetTransacEmailsListTransactionalEmailsInner.attributeTypeMap;
    }
}
exports.GetTransacEmailsListTransactionalEmailsInner = GetTransacEmailsListTransactionalEmailsInner;
GetTransacEmailsListTransactionalEmailsInner.discriminator = undefined;
GetTransacEmailsListTransactionalEmailsInner.attributeTypeMap = [
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
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    },
    {
        "name": "uuid",
        "baseName": "uuid",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "from",
        "baseName": "from",
        "type": "string"
    },
    {
        "name": "tags",
        "baseName": "tags",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=getTransacEmailsListTransactionalEmailsInner.js.map