"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTransacEmailsList = void 0;
class GetTransacEmailsList {
    static getAttributeTypeMap() {
        return GetTransacEmailsList.attributeTypeMap;
    }
}
exports.GetTransacEmailsList = GetTransacEmailsList;
GetTransacEmailsList.discriminator = undefined;
GetTransacEmailsList.attributeTypeMap = [
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    },
    {
        "name": "transactionalEmails",
        "baseName": "transactionalEmails",
        "type": "Array<GetTransacEmailsListTransactionalEmailsInner>"
    }
];
//# sourceMappingURL=getTransacEmailsList.js.map