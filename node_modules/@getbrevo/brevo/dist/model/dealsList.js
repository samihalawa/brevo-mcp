"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DealsList = void 0;
class DealsList {
    static getAttributeTypeMap() {
        return DealsList.attributeTypeMap;
    }
}
exports.DealsList = DealsList;
DealsList.discriminator = undefined;
DealsList.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<Deal>"
    }
];
//# sourceMappingURL=dealsList.js.map