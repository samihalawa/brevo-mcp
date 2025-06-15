"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReseller = void 0;
class CreateReseller {
    static getAttributeTypeMap() {
        return CreateReseller.attributeTypeMap;
    }
}
exports.CreateReseller = CreateReseller;
CreateReseller.discriminator = undefined;
CreateReseller.attributeTypeMap = [
    {
        "name": "authKey",
        "baseName": "authKey",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    }
];
//# sourceMappingURL=createReseller.js.map