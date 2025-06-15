export declare class GetCorporateUserPermissionFeatureAccess {
    'apiKeys'?: Array<string>;
    'myPlan'?: Array<string>;
    'userManagement'?: Array<string>;
    'appsManagement'?: Array<string>;
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
