import { GetUserPermissionPrivilegesInner } from './getUserPermissionPrivilegesInner';
export declare class GetUserPermission {
    'email': string;
    'status': string;
    'privileges': Array<GetUserPermissionPrivilegesInner>;
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
