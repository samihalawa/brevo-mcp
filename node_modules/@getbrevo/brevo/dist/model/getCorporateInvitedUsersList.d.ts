import { GetCorporateInvitedUsersListUsersInner } from './getCorporateInvitedUsersListUsersInner';
export declare class GetCorporateInvitedUsersList {
    'users'?: Array<GetCorporateInvitedUsersListUsersInner>;
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
