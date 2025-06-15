"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInvitedUsersListUsersInner = void 0;
class GetInvitedUsersListUsersInner {
    static getAttributeTypeMap() {
        return GetInvitedUsersListUsersInner.attributeTypeMap;
    }
}
exports.GetInvitedUsersListUsersInner = GetInvitedUsersListUsersInner;
GetInvitedUsersListUsersInner.discriminator = undefined;
GetInvitedUsersListUsersInner.attributeTypeMap = [
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
        "type": "GetInvitedUsersListUsersInnerFeatureAccess"
    }
];
//# sourceMappingURL=getInvitedUsersListUsersInner.js.map