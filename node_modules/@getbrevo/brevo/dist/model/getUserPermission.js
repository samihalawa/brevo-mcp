"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserPermission = void 0;
class GetUserPermission {
    static getAttributeTypeMap() {
        return GetUserPermission.attributeTypeMap;
    }
}
exports.GetUserPermission = GetUserPermission;
GetUserPermission.discriminator = undefined;
GetUserPermission.attributeTypeMap = [
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
        "name": "privileges",
        "baseName": "privileges",
        "type": "Array<GetUserPermissionPrivilegesInner>"
    }
];
//# sourceMappingURL=getUserPermission.js.map