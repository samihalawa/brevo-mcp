"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    static getAttributeTypeMap() {
        return Note.attributeTypeMap;
    }
}
exports.Note = Note;
Note.discriminator = undefined;
Note.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
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
        "name": "authorId",
        "baseName": "authorId",
        "type": "object"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "Date"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "Date"
    }
];
//# sourceMappingURL=note.js.map