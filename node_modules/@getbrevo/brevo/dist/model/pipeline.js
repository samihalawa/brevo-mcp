"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pipeline = void 0;
class Pipeline {
    static getAttributeTypeMap() {
        return Pipeline.attributeTypeMap;
    }
}
exports.Pipeline = Pipeline;
Pipeline.discriminator = undefined;
Pipeline.attributeTypeMap = [
    {
        "name": "pipeline",
        "baseName": "pipeline",
        "type": "string"
    },
    {
        "name": "pipelineName",
        "baseName": "pipeline_name",
        "type": "string"
    },
    {
        "name": "stages",
        "baseName": "stages",
        "type": "Array<PipelineStage>"
    }
];
//# sourceMappingURL=pipeline.js.map