"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipelineStage = void 0;
class PipelineStage {
    static getAttributeTypeMap() {
        return PipelineStage.attributeTypeMap;
    }
}
exports.PipelineStage = PipelineStage;
PipelineStage.discriminator = undefined;
PipelineStage.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
//# sourceMappingURL=pipelineStage.js.map