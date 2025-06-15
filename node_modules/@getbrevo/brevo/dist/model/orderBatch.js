"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderBatch = void 0;
class OrderBatch {
    constructor() {
        this['historical'] = true;
    }
    static getAttributeTypeMap() {
        return OrderBatch.attributeTypeMap;
    }
}
exports.OrderBatch = OrderBatch;
OrderBatch.discriminator = undefined;
OrderBatch.attributeTypeMap = [
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<Order>"
    },
    {
        "name": "notifyUrl",
        "baseName": "notifyUrl",
        "type": "string"
    },
    {
        "name": "historical",
        "baseName": "historical",
        "type": "boolean"
    }
];
//# sourceMappingURL=orderBatch.js.map