import { GetCorporateInvitedUsersListUsersInnerFeatureAccess } from './getCorporateInvitedUsersListUsersInnerFeatureAccess';
import { GetCorporateInvitedUsersListUsersInnerGroups } from './getCorporateInvitedUsersListUsersInnerGroups';
export declare class GetCorporateInvitedUsersListUsersInner {
    'groups': GetCorporateInvitedUsersListUsersInnerGroups;
    'email': string;
    'isOwner': string;
    'status': string;
    'featureAccess': GetCorporateInvitedUsersListUsersInnerFeatureAccess;
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
