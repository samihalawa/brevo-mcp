"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserPermissionPrivilegesInner = void 0;
class GetUserPermissionPrivilegesInner {
    static getAttributeTypeMap() {
        return GetUserPermissionPrivilegesInner.attributeTypeMap;
    }
}
exports.GetUserPermissionPrivilegesInner = GetUserPermissionPrivilegesInner;
GetUserPermissionPrivilegesInner.discriminator = undefined;
GetUserPermissionPrivilegesInner.attributeTypeMap = [
    {
        "name": "feature",
        "baseName": "feature",
        "type": "string"
    },
    {
        "name": "permissions",
        "baseName": "permissions",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=getUserPermissionPrivilegesInner.js.map