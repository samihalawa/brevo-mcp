"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTransacBlockedContactsContactsInnerReason = void 0;
class GetTransacBlockedContactsContactsInnerReason {
    static getAttributeTypeMap() {
        return GetTransacBlockedContactsContactsInnerReason.attributeTypeMap;
    }
}
exports.GetTransacBlockedContactsContactsInnerReason = GetTransacBlockedContactsContactsInnerReason;
GetTransacBlockedContactsContactsInnerReason.discriminator = undefined;
GetTransacBlockedContactsContactsInnerReason.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "GetTransacBlockedContactsContactsInnerReason.CodeEnum"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
(function (GetTransacBlockedContactsContactsInnerReason) {
    let CodeEnum;
    (function (CodeEnum) {
        CodeEnum[CodeEnum["UnsubscribedViaMa"] = 'unsubscribedViaMA'] = "UnsubscribedViaMa";
        CodeEnum[CodeEnum["UnsubscribedViaEmail"] = 'unsubscribedViaEmail'] = "UnsubscribedViaEmail";
        CodeEnum[CodeEnum["AdminBlocked"] = 'adminBlocked'] = "AdminBlocked";
        CodeEnum[CodeEnum["UnsubscribedViaApi"] = 'unsubscribedViaApi'] = "UnsubscribedViaApi";
        CodeEnum[CodeEnum["HardBounce"] = 'hardBounce'] = "HardBounce";
        CodeEnum[CodeEnum["ContactFlaggedAsSpam"] = 'contactFlaggedAsSpam'] = "ContactFlaggedAsSpam";
    })(CodeEnum = GetTransacBlockedContactsContactsInnerReason.CodeEnum || (GetTransacBlockedContactsContactsInnerReason.CodeEnum = {}));
})(GetTransacBlockedContactsContactsInnerReason = exports.GetTransacBlockedContactsContactsInnerReason || (exports.GetTransacBlockedContactsContactsInnerReason = {}));
//# sourceMappingURL=getTransacBlockedContactsContactsInnerReason.js.map