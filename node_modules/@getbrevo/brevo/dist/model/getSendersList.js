"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSendersList = void 0;
class GetSendersList {
    static getAttributeTypeMap() {
        return GetSendersList.attributeTypeMap;
    }
}
exports.GetSendersList = GetSendersList;
GetSendersList.discriminator = undefined;
GetSendersList.attributeTypeMap = [
    {
        "name": "senders",
        "baseName": "senders",
        "type": "Array<GetSendersListSendersInner>"
    }
];
//# sourceMappingURL=getSendersList.js.map