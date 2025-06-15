"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteAdminUserPrivilegesInner = void 0;
class InviteAdminUserPrivilegesInner {
    static getAttributeTypeMap() {
        return InviteAdminUserPrivilegesInner.attributeTypeMap;
    }
}
exports.InviteAdminUserPrivilegesInner = InviteAdminUserPrivilegesInner;
InviteAdminUserPrivilegesInner.discriminator = undefined;
InviteAdminUserPrivilegesInner.attributeTypeMap = [
    {
        "name": "feature",
        "baseName": "feature",
        "type": "InviteAdminUserPrivilegesInner.FeatureEnum"
    },
    {
        "name": "permissions",
        "baseName": "permissions",
        "type": "Array<InviteAdminUserPrivilegesInner.PermissionsEnum>"
    }
];
(function (InviteAdminUserPrivilegesInner) {
    let FeatureEnum;
    (function (FeatureEnum) {
        FeatureEnum[FeatureEnum["MyPlan"] = 'my_plan'] = "MyPlan";
        FeatureEnum[FeatureEnum["Api"] = 'api'] = "Api";
        FeatureEnum[FeatureEnum["UserManagement"] = 'user_management'] = "UserManagement";
        FeatureEnum[FeatureEnum["AppManagement"] = 'app_management'] = "AppManagement";
    })(FeatureEnum = InviteAdminUserPrivilegesInner.FeatureEnum || (InviteAdminUserPrivilegesInner.FeatureEnum = {}));
    let PermissionsEnum;
    (function (PermissionsEnum) {
        PermissionsEnum[PermissionsEnum["All"] = 'all'] = "All";
        PermissionsEnum[PermissionsEnum["None"] = 'none'] = "None";
    })(PermissionsEnum = InviteAdminUserPrivilegesInner.PermissionsEnum || (InviteAdminUserPrivilegesInner.PermissionsEnum = {}));
})(InviteAdminUserPrivilegesInner = exports.InviteAdminUserPrivilegesInner || (exports.InviteAdminUserPrivilegesInner = {}));
//# sourceMappingURL=inviteAdminUserPrivilegesInner.js.map