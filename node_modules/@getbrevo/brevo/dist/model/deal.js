"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deal = void 0;
class Deal {
    static getAttributeTypeMap() {
        return Deal.attributeTypeMap;
    }
}
exports.Deal = Deal;
Deal.discriminator = undefined;
Deal.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "attributes",
        "baseName": "attributes",
        "type": "object"
    },
    {
        "name": "linkedContactsIds",
        "baseName": "linkedContactsIds",
        "type": "Array<number>"
    },
    {
        "name": "linkedCompaniesIds",
        "baseName": "linkedCompaniesIds",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=deal.js.map