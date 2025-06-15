"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskTypes = void 0;
class TaskTypes {
    static getAttributeTypeMap() {
        return TaskTypes.attributeTypeMap;
    }
}
exports.TaskTypes = TaskTypes;
TaskTypes.discriminator = undefined;
TaskTypes.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
//# sourceMappingURL=taskTypes.js.map