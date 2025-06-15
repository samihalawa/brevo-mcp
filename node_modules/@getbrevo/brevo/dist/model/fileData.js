"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileData = void 0;
class FileData {
    static getAttributeTypeMap() {
        return FileData.attributeTypeMap;
    }
}
exports.FileData = FileData;
FileData.discriminator = undefined;
FileData.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "authorId",
        "baseName": "authorId",
        "type": "string"
    },
    {
        "name": "contactId",
        "baseName": "contactId",
        "type": "number"
    },
    {
        "name": "dealId",
        "baseName": "dealId",
        "type": "string"
    },
    {
        "name": "companyId",
        "baseName": "companyId",
        "type": "string"
    },
    {
        "name": "size",
        "baseName": "size",
        "type": "number"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    }
];
//# sourceMappingURL=fileData.js.map