"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestContactExport = void 0;
class RequestContactExport {
    static getAttributeTypeMap() {
        return RequestContactExport.attributeTypeMap;
    }
}
exports.RequestContactExport = RequestContactExport;
RequestContactExport.discriminator = undefined;
RequestContactExport.attributeTypeMap = [
    {
        "name": "exportAttributes",
        "baseName": "exportAttributes",
        "type": "Array<string>"
    },
    {
        "name": "customContactFilter",
        "baseName": "customContactFilter",
        "type": "RequestContactExportCustomContactFilter"
    },
    {
        "name": "notifyUrl",
        "baseName": "notifyUrl",
        "type": "string"
    }
];
//# sourceMappingURL=requestContactExport.js.map