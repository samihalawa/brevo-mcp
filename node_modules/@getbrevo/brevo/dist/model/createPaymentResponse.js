"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentResponse = void 0;
class CreatePaymentResponse {
    static getAttributeTypeMap() {
        return CreatePaymentResponse.attributeTypeMap;
    }
}
exports.CreatePaymentResponse = CreatePaymentResponse;
CreatePaymentResponse.discriminator = undefined;
CreatePaymentResponse.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    }
];
//# sourceMappingURL=createPaymentResponse.js.map