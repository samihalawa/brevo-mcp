"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteAdminUser = void 0;
class InviteAdminUser {
    static getAttributeTypeMap() {
        return InviteAdminUser.attributeTypeMap;
    }
}
exports.InviteAdminUser = InviteAdminUser;
InviteAdminUser.discriminator = undefined;
InviteAdminUser.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "allFeaturesAccess",
        "baseName": "all_features_access",
        "type": "boolean"
    },
    {
        "name": "groupIds",
        "baseName": "groupIds",
        "type": "Array<string>"
    },
    {
        "name": "privileges",
        "baseName": "privileges",
        "type": "Array<InviteAdminUserPrivilegesInner>"
    }
];
//# sourceMappingURL=inviteAdminUser.js.map