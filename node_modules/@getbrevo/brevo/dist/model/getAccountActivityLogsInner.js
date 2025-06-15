"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccountActivityLogsInner = void 0;
class GetAccountActivityLogsInner {
    static getAttributeTypeMap() {
        return GetAccountActivityLogsInner.attributeTypeMap;
    }
}
exports.GetAccountActivityLogsInner = GetAccountActivityLogsInner;
GetAccountActivityLogsInner.discriminator = undefined;
GetAccountActivityLogsInner.attributeTypeMap = [
    {
        "name": "action",
        "baseName": "action",
        "type": "string"
    },
    {
        "name": "date",
        "baseName": "date",
        "type": "string"
    },
    {
        "name": "userEmail",
        "baseName": "user_email",
        "type": "string"
    },
    {
        "name": "userIp",
        "baseName": "user_ip",
        "type": "string"
    },
    {
        "name": "userAgent",
        "baseName": "user_agent",
        "type": "string"
    }
];
//# sourceMappingURL=getAccountActivityLogsInner.js.map