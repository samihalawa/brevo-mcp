"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBatchContacts = void 0;
class UpdateBatchContacts {
    static getAttributeTypeMap() {
        return UpdateBatchContacts.attributeTypeMap;
    }
}
exports.UpdateBatchContacts = UpdateBatchContacts;
UpdateBatchContacts.discriminator = undefined;
UpdateBatchContacts.attributeTypeMap = [
    {
        "name": "contacts",
        "baseName": "contacts",
        "type": "Array<UpdateBatchContactsContactsInner>"
    }
];
//# sourceMappingURL=updateBatchContacts.js.map