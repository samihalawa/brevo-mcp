import { GetSegmentsSegments } from './getSegmentsSegments';
export declare class GetSegments {
    'segments'?: GetSegmentsSegments;
    'count'?: number;
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
