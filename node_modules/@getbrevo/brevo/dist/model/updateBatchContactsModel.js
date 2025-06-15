"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBatchContactsModel = void 0;
class UpdateBatchContactsModel {
    static getAttributeTypeMap() {
        return UpdateBatchContactsModel.attributeTypeMap;
    }
}
exports.UpdateBatchContactsModel = UpdateBatchContactsModel;
UpdateBatchContactsModel.discriminator = undefined;
UpdateBatchContactsModel.attributeTypeMap = [
    {
        "name": "successIds",
        "baseName": "successIds",
        "type": "Array<number>"
    },
    {
        "name": "failureIds",
        "baseName": "failureIds",
        "type": "Array<number>"
    }
];
//# sourceMappingURL=updateBatchContactsModel.js.map