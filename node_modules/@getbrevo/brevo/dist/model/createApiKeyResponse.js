"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApiKeyResponse = void 0;
class CreateApiKeyResponse {
    static getAttributeTypeMap() {
        return CreateApiKeyResponse.attributeTypeMap;
    }
}
exports.CreateApiKeyResponse = CreateApiKeyResponse;
CreateApiKeyResponse.discriminator = undefined;
CreateApiKeyResponse.attributeTypeMap = [
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "key",
        "baseName": "key",
        "type": "string"
    }
];
//# sourceMappingURL=createApiKeyResponse.js.map