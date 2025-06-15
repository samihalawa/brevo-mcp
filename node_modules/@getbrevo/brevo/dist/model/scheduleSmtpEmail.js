"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleSmtpEmail = void 0;
class ScheduleSmtpEmail {
    static getAttributeTypeMap() {
        return ScheduleSmtpEmail.attributeTypeMap;
    }
}
exports.ScheduleSmtpEmail = ScheduleSmtpEmail;
ScheduleSmtpEmail.discriminator = undefined;
ScheduleSmtpEmail.attributeTypeMap = [
    {
        "name": "messageId",
        "baseName": "messageId",
        "type": "string"
    },
    {
        "name": "messageIds",
        "baseName": "messageIds",
        "type": "Array<string>"
    },
    {
        "name": "batchId",
        "baseName": "batchId",
        "type": "string"
    }
];
//# sourceMappingURL=scheduleSmtpEmail.js.map