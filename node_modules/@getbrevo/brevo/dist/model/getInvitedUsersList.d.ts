import { GetInvitedUsersListUsersInner } from './getInvitedUsersListUsersInner';
export declare class GetInvitedUsersList {
    'users'?: Array<GetInvitedUsersListUsersInner>;
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
