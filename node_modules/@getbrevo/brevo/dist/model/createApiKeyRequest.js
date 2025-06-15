"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApiKeyRequest = void 0;
class CreateApiKeyRequest {
    static getAttributeTypeMap() {
        return CreateApiKeyRequest.attributeTypeMap;
    }
}
exports.CreateApiKeyRequest = CreateApiKeyRequest;
CreateApiKeyRequest.discriminator = undefined;
CreateApiKeyRequest.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
//# sourceMappingURL=createApiKeyRequest.js.map