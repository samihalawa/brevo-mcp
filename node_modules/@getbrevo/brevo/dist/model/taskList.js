"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskList = void 0;
class TaskList {
    static getAttributeTypeMap() {
        return TaskList.attributeTypeMap;
    }
}
exports.TaskList = TaskList;
TaskList.discriminator = undefined;
TaskList.attributeTypeMap = [
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<Task>"
    }
];
//# sourceMappingURL=taskList.js.map