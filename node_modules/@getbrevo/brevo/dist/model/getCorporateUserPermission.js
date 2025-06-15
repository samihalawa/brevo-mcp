"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCorporateUserPermission = void 0;
class GetCorporateUserPermission {
    static getAttributeTypeMap() {
        return GetCorporateUserPermission.attributeTypeMap;
    }
}
exports.GetCorporateUserPermission = GetCorporateUserPermission;
GetCorporateUserPermission.discriminator = undefined;
GetCorporateUserPermission.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "groups",
        "baseName": "groups",
        "type": "Array<GetCorporateUserPermissionGroupsInner>"
    },
    {
        "name": "featureAccess",
        "baseName": "feature_access",
        "type": "GetCorporateUserPermissionFeatureAccess"
    }
];
//# sourceMappingURL=getCorporateUserPermission.js.map