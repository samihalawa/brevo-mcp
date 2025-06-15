"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inviteuser = void 0;
class Inviteuser {
    static getAttributeTypeMap() {
        return Inviteuser.attributeTypeMap;
    }
}
exports.Inviteuser = Inviteuser;
Inviteuser.discriminator = undefined;
Inviteuser.attributeTypeMap = [
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
        "name": "privileges",
        "baseName": "privileges",
        "type": "Array<InviteuserPrivilegesInner>"
    }
];
//# sourceMappingURL=inviteuser.js.map