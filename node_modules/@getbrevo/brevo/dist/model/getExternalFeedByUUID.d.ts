import { GetExternalFeedByUUIDHeadersInner } from './getExternalFeedByUUIDHeadersInner';
export declare class GetExternalFeedByUUID {
    'id': string;
    'name': string;
    'url': string;
    'authType': GetExternalFeedByUUID.AuthTypeEnum;
    'username'?: string;
    'password'?: string;
    'token'?: string;
    'headers': Array<GetExternalFeedByUUIDHeadersInner>;
    'maxRetries': number;
    'cache': boolean;
    'createdAt': Date;
    'modifiedAt': Date;
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
export declare namespace GetExternalFeedByUUID {
    enum AuthTypeEnum {
        Basic,
        Token,
        NoAuth
    }
}
