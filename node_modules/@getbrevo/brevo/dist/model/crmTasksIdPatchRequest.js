"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmTasksIdPatchRequest = void 0;
class CrmTasksIdPatchRequest {
    static getAttributeTypeMap() {
        return CrmTasksIdPatchRequest.attributeTypeMap;
    }
}
exports.CrmTasksIdPatchRequest = CrmTasksIdPatchRequest;
CrmTasksIdPatchRequest.discriminator = undefined;
CrmTasksIdPatchRequest.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "duration",
        "baseName": "duration",
        "type": "number"
    },
    {
        "name": "taskTypeId",
        "baseName": "taskTypeId",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "Date"
    },
    {
        "name": "notes",
        "baseName": "notes",
        "type": "string"
    },
    {
        "name": "done",
        "baseName": "done",
        "type": "boolean"
    },
    {
        "name": "assignToId",
        "baseName": "assignToId",
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
//# sourceMappingURL=crmTasksIdPatchRequest.js.map