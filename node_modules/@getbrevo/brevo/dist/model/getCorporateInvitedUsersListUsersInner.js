"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCorporateInvitedUsersListUsersInner = void 0;
class GetCorporateInvitedUsersListUsersInner {
    static getAttributeTypeMap() {
        return GetCorporateInvitedUsersListUsersInner.attributeTypeMap;
    }
}
exports.GetCorporateInvitedUsersListUsersInner = GetCorporateInvitedUsersListUsersInner;
GetCorporateInvitedUsersListUsersInner.discriminator = undefined;
GetCorporateInvitedUsersListUsersInner.attributeTypeMap = [
    {
        "name": "groups",
        "baseName": "groups",
        "type": "GetCorporateInvitedUsersListUsersInnerGroups"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "isOwner",
        "baseName": "is_owner",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "featureAccess",
        "baseName": "feature_access",
        "type": "GetCorporateInvitedUsersListUsersInnerFeatureAccess"
    }
];
//# sourceMappingURL=getCorporateInvitedUsersListUsersInner.js.map