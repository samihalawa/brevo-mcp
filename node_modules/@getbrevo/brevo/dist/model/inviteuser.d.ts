import { InviteuserPrivilegesInner } from './inviteuserPrivilegesInner';
export declare class Inviteuser {
    'email': string;
    'allFeaturesAccess': boolean;
    'privileges': Array<InviteuserPrivilegesInner>;
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
