import { GetCorporateUserPermissionFeatureAccess } from './getCorporateUserPermissionFeatureAccess';
import { GetCorporateUserPermissionGroupsInner } from './getCorporateUserPermissionGroupsInner';
export declare class GetCorporateUserPermission {
    'email': string;
    'status': string;
    'groups': Array<GetCorporateUserPermissionGroupsInner>;
    'featureAccess': GetCorporateUserPermissionFeatureAccess;
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
