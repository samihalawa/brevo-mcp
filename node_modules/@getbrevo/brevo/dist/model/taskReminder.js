"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskReminder = void 0;
class TaskReminder {
    static getAttributeTypeMap() {
        return TaskReminder.attributeTypeMap;
    }
}
exports.TaskReminder = TaskReminder;
TaskReminder.discriminator = undefined;
TaskReminder.attributeTypeMap = [
    {
        "name": "value",
        "baseName": "value",
        "type": "number"
    },
    {
        "name": "unit",
        "baseName": "unit",
        "type": "TaskReminder.UnitEnum"
    },
    {
        "name": "types",
        "baseName": "types",
        "type": "Array<string>"
    }
];
(function (TaskReminder) {
    let UnitEnum;
    (function (UnitEnum) {
        UnitEnum[UnitEnum["Minutes"] = 'minutes'] = "Minutes";
        UnitEnum[UnitEnum["Hours"] = 'hours'] = "Hours";
        UnitEnum[UnitEnum["Weeks"] = 'weeks'] = "Weeks";
        UnitEnum[UnitEnum["Days"] = 'days'] = "Days";
    })(UnitEnum = TaskReminder.UnitEnum || (TaskReminder.UnitEnum = {}));
})(TaskReminder = exports.TaskReminder || (exports.TaskReminder = {}));
//# sourceMappingURL=taskReminder.js.map