"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteData = void 0;
class NoteData {
    static getAttributeTypeMap() {
        return NoteData.attributeTypeMap;
    }
}
exports.NoteData = NoteData;
NoteData.discriminator = undefined;
NoteData.attributeTypeMap = [
    {
        "name": "text",
        "baseName": "text",
        "type": "string"
    },
    {
        "name": "contactIds",
        "baseName": "contactIds",
        "type": "Array<number>"
    },
    {
        "name": "dealIds",
        "baseName": "dealIds",
        "type": "Array<string>"
    },
    {
        "name": "companyIds",
        "baseName": "companyIds",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=noteData.js.map