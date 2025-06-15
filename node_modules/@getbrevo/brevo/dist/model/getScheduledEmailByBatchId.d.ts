import { GetScheduledEmailByBatchIdBatchesInner } from './getScheduledEmailByBatchIdBatchesInner';
export declare class GetScheduledEmailByBatchId {
    'count'?: number;
    'batches'?: Array<GetScheduledEmailByBatchIdBatchesInner>;
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
