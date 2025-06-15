"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProcess = void 0;
class GetProcess {
    static getAttributeTypeMap() {
        return GetProcess.attributeTypeMap;
    }
}
exports.GetProcess = GetProcess;
GetProcess.discriminator = undefined;
GetProcess.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "number"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetProcess.StatusEnum"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "exportUrl",
        "baseName": "export_url",
        "type": "string"
    }
];
(function (GetProcess) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Queued"] = 'queued'] = "Queued";
        StatusEnum[StatusEnum["InProcess"] = 'in_process'] = "InProcess";
        StatusEnum[StatusEnum["Completed"] = 'completed'] = "Completed";
    })(StatusEnum = GetProcess.StatusEnum || (GetProcess.StatusEnum = {}));
})(GetProcess = exports.GetProcess || (exports.GetProcess = {}));
//# sourceMappingURL=getProcess.js.map