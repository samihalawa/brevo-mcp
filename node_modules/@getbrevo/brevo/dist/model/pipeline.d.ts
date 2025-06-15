import { PipelineStage } from './pipelineStage';
export declare class Pipeline {
    'pipeline'?: string;
    'pipelineName'?: string;
    'stages'?: Array<PipelineStage>;
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
