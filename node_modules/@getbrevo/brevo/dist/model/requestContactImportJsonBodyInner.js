"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestContactImportJsonBodyInner = void 0;
class RequestContactImportJsonBodyInner {
    static getAttributeTypeMap() {
        return RequestContactImportJsonBodyInner.attributeTypeMap;
    }
}
exports.RequestContactImportJsonBodyInner = RequestContactImportJsonBodyInner;
RequestContactImportJsonBodyInner.discriminator = undefined;
RequestContactImportJsonBodyInner.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "{ [key: string]: any; }"
    }
];
//# sourceMappingURL=requestContactImportJsonBodyInner.js.map