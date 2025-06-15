"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateChildAccountStatus = void 0;
class UpdateChildAccountStatus {
    static getAttributeTypeMap() {
        return UpdateChildAccountStatus.attributeTypeMap;
    }
}
exports.UpdateChildAccountStatus = UpdateChildAccountStatus;
UpdateChildAccountStatus.discriminator = undefined;
UpdateChildAccountStatus.attributeTypeMap = [
    {
        "name": "transactionalEmail",
        "baseName": "transactionalEmail",
        "type": "boolean"
    },
    {
        "name": "transactionalSms",
        "baseName": "transactionalSms",
        "type": "boolean"
    },
    {
        "name": "marketingAutomation",
        "baseName": "marketingAutomation",
        "type": "boolean"
    },
    {
        "name": "smsCampaign",
        "baseName": "smsCampaign",
        "type": "boolean"
    }
];
//# sourceMappingURL=updateChildAccountStatus.js.map