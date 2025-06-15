"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    static getAttributeTypeMap() {
        return Task.attributeTypeMap;
    }
}
exports.Task = Task;
Task.discriminator = undefined;
Task.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "taskTypeId",
        "baseName": "taskTypeId",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "contactsIds",
        "baseName": "contactsIds",
        "type": "Array<number>"
    },
    {
        "name": "dealsIds",
        "baseName": "dealsIds",
        "type": "Array<string>"
    },
    {
        "name": "companiesIds",
        "baseName": "companiesIds",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=task.js.map