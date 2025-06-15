"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClient = void 0;
class GetClient {
    static getAttributeTypeMap() {
        return GetClient.attributeTypeMap;
    }
}
exports.GetClient = GetClient;
GetClient.discriminator = undefined;
GetClient.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    }
];
//# sourceMappingURL=getClient.js.map