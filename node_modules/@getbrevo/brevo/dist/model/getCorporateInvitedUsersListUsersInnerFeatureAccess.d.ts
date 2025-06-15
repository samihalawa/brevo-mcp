export declare class GetCorporateInvitedUsersListUsersInnerFeatureAccess {
    'userManagement'?: Array<string>;
    'apiKeys'?: Array<string>;
    'myPlan'?: Array<string>;
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
