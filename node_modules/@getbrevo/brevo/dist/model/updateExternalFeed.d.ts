import { GetExternalFeedByUUIDHeadersInner } from './getExternalFeedByUUIDHeadersInner';
export declare class UpdateExternalFeed {
    'name'?: string;
    'url'?: string;
    'authType'?: UpdateExternalFeed.AuthTypeEnum;
    'username'?: string;
    'password'?: string;
    'token'?: string;
    'headers'?: Array<GetExternalFeedByUUIDHeadersInner>;
    'maxRetries'?: number;
    'cache'?: boolean;
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
export declare namespace UpdateExternalFeed {
    enum AuthTypeEnum {
        Basic,
        Token,
        NoAuth
    }
}
