"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPaymentRequest = void 0;
class GetPaymentRequest {
    static getAttributeTypeMap() {
        return GetPaymentRequest.attributeTypeMap;
    }
}
exports.GetPaymentRequest = GetPaymentRequest;
GetPaymentRequest.discriminator = undefined;
GetPaymentRequest.attributeTypeMap = [
    {
        "name": "reference",
        "baseName": "reference",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "GetPaymentRequest.StatusEnum"
    },
    {
        "name": "configuration",
        "baseName": "configuration",
        "type": "Configuration"
    },
    {
        "name": "contactId",
        "baseName": "contactId",
        "type": "number"
    },
    {
        "name": "numberOfRemindersSent",
        "baseName": "numberOfRemindersSent",
        "type": "number"
    },
    {
        "name": "cart",
        "baseName": "cart",
        "type": "Cart"
    },
    {
        "name": "notification",
        "baseName": "notification",
        "type": "Notification"
    }
];
(function (GetPaymentRequest) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Created"] = 'created'] = "Created";
        StatusEnum[StatusEnum["Sent"] = 'sent'] = "Sent";
        StatusEnum[StatusEnum["ReminderSentPaid"] = 'reminderSent - paid'] = "ReminderSentPaid";
    })(StatusEnum = GetPaymentRequest.StatusEnum || (GetPaymentRequest.StatusEnum = {}));
})(GetPaymentRequest = exports.GetPaymentRequest || (exports.GetPaymentRequest = {}));
//# sourceMappingURL=getPaymentRequest.js.map