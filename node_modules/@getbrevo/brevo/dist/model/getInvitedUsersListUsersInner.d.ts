import { GetInvitedUsersListUsersInnerFeatureAccess } from './getInvitedUsersListUsersInnerFeatureAccess';
export declare class GetInvitedUsersListUsersInner {
    'email': string;
    'isOwner': string;
    'status': string;
    'featureAccess': GetInvitedUsersListUsersInnerFeatureAccess;
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
