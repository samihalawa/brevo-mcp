"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetOrders = void 0;
class GetOrders {
    static getAttributeTypeMap() {
        return GetOrders.attributeTypeMap;
    }
}
exports.GetOrders = GetOrders;
GetOrders.discriminator = undefined;
GetOrders.attributeTypeMap = [
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<GetOrdersOrdersInner>"
    },
    {
        "name": "count",
        "baseName": "count",
        "type": "number"
    }
];
//# sourceMappingURL=getOrders.js.map