"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccountActivity = void 0;
class GetAccountActivity {
    static getAttributeTypeMap() {
        return GetAccountActivity.attributeTypeMap;
    }
}
exports.GetAccountActivity = GetAccountActivity;
GetAccountActivity.discriminator = undefined;
GetAccountActivity.attributeTypeMap = [
    {
        "name": "logs",
        "baseName": "logs",
        "type": "Array<GetAccountActivityLogsInner>"
    }
];
//# sourceMappingURL=getAccountActivity.js.map