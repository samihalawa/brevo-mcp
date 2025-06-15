import { GetAllExternalFeedsFeedsInner } from './getAllExternalFeedsFeedsInner';
export declare class GetAllExternalFeeds {
    'count'?: number;
    'feeds'?: Array<GetAllExternalFeedsFeedsInner>;
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
