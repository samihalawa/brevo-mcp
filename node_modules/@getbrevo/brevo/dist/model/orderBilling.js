"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderBilling = void 0;
class OrderBilling {
    static getAttributeTypeMap() {
        return OrderBilling.attributeTypeMap;
    }
}
exports.OrderBilling = OrderBilling;
OrderBilling.discriminator = undefined;
OrderBilling.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "string"
    },
    {
        "name": "city",
        "baseName": "city",
        "type": "string"
    },
    {
        "name": "countryCode",
        "baseName": "countryCode",
        "type": "string"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "string"
    },
    {
        "name": "phone",
        "baseName": "phone",
        "type": "string"
    },
    {
        "name": "postCode",
        "baseName": "postCode",
        "type": "string"
    },
    {
        "name": "paymentMethod",
        "baseName": "paymentMethod",
        "type": "string"
    },
    {
        "name": "region",
        "baseName": "region",
        "type": "string"
    }
];
//# sourceMappingURL=orderBilling.js.map