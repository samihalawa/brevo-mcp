"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCorporateInvitedUsersListUsersInnerFeatureAccess = void 0;
class GetCorporateInvitedUsersListUsersInnerFeatureAccess {
    static getAttributeTypeMap() {
        return GetCorporateInvitedUsersListUsersInnerFeatureAccess.attributeTypeMap;
    }
}
exports.GetCorporateInvitedUsersListUsersInnerFeatureAccess = GetCorporateInvitedUsersListUsersInnerFeatureAccess;
GetCorporateInvitedUsersListUsersInnerFeatureAccess.discriminator = undefined;
GetCorporateInvitedUsersListUsersInnerFeatureAccess.attributeTypeMap = [
    {
        "name": "userManagement",
        "baseName": "user_management",
        "type": "Array<string>"
    },
    {
        "name": "apiKeys",
        "baseName": "api_keys",
        "type": "Array<string>"
    },
    {
        "name": "myPlan",
        "baseName": "my_plan",
        "type": "Array<string>"
    },
    {
        "name": "appsManagement",
        "baseName": "apps_management",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=getCorporateInvitedUsersListUsersInnerFeatureAccess.js.map