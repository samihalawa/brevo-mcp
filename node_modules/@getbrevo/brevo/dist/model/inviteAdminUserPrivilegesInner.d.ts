export declare class InviteAdminUserPrivilegesInner {
    'feature'?: InviteAdminUserPrivilegesInner.FeatureEnum;
    'permissions'?: Array<InviteAdminUserPrivilegesInner.PermissionsEnum>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace InviteAdminUserPrivilegesInner {
    enum FeatureEnum {
        MyPlan,
        Api,
        UserManagement,
        AppManagement
    }
    enum PermissionsEnum {
        All,
        None
    }
}
