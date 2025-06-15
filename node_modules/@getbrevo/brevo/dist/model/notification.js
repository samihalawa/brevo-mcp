"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
class Notification {
    static getAttributeTypeMap() {
        return Notification.attributeTypeMap;
    }
}
exports.Notification = Notification;
Notification.discriminator = undefined;
Notification.attributeTypeMap = [
    {
        "name": "channel",
        "baseName": "channel",
        "type": "Notification.ChannelEnum"
    },
    {
        "name": "text",
        "baseName": "text",
        "type": "string"
    }
];
(function (Notification) {
    let ChannelEnum;
    (function (ChannelEnum) {
        ChannelEnum[ChannelEnum["Email"] = 'email'] = "Email";
    })(ChannelEnum = Notification.ChannelEnum || (Notification.ChannelEnum = {}));
})(Notification = exports.Notification || (exports.Notification = {}));
//# sourceMappingURL=notification.js.map