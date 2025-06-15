"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCorporateUserPermissionFeatureAccess = void 0;
class GetCorporateUserPermissionFeatureAccess {
    static getAttributeTypeMap() {
        return GetCorporateUserPermissionFeatureAccess.attributeTypeMap;
    }
}
exports.GetCorporateUserPermissionFeatureAccess = GetCorporateUserPermissionFeatureAccess;
GetCorporateUserPermissionFeatureAccess.discriminator = undefined;
GetCorporateUserPermissionFeatureAccess.attributeTypeMap = [
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
        "name": "userManagement",
        "baseName": "user_management",
        "type": "Array<string>"
    },
    {
        "name": "appsManagement",
        "baseName": "apps_management",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=getCorporateUserPermissionFeatureAccess.js.map