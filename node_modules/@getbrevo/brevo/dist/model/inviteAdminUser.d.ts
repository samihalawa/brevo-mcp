import { InviteAdminUserPrivilegesInner } from './inviteAdminUserPrivilegesInner';
export declare class InviteAdminUser {
    'email': string;
    'allFeaturesAccess': boolean;
    'groupIds'?: Array<string>;
    'privileges': Array<InviteAdminUserPrivilegesInner>;
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
