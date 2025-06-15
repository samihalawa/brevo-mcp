"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentRequest = void 0;
class CreatePaymentRequest {
    static getAttributeTypeMap() {
        return CreatePaymentRequest.attributeTypeMap;
    }
}
exports.CreatePaymentRequest = CreatePaymentRequest;
CreatePaymentRequest.discriminator = undefined;
CreatePaymentRequest.attributeTypeMap = [
    {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
    },
    {
        "name": "cart",
        "baseName": "cart",
        "type": "Cart"
    },
    {
        "name": "contactId",
        "baseName": "contactId",
        "type": "number"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "notification",
        "baseName": "notification",
        "type": "Notification"
    },
    {
        "name": "configuration",
        "baseName": "configuration",
        "type": "Configuration"
    }
];
//# sourceMappingURL=createPaymentRequest.js.map