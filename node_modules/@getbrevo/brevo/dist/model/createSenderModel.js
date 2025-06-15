"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSenderModel = void 0;
class CreateSenderModel {
    static getAttributeTypeMap() {
        return CreateSenderModel.attributeTypeMap;
    }
}
exports.CreateSenderModel = CreateSenderModel;
CreateSenderModel.discriminator = undefined;
CreateSenderModel.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "spfError",
        "baseName": "spfError",
        "type": "boolean"
    },
    {
        "name": "dkimError",
        "baseName": "dkimError",
        "type": "boolean"
    }
];
//# sourceMappingURL=createSenderModel.js.map