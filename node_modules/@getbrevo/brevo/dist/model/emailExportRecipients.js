"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailExportRecipients = void 0;
class EmailExportRecipients {
    static getAttributeTypeMap() {
        return EmailExportRecipients.attributeTypeMap;
    }
}
exports.EmailExportRecipients = EmailExportRecipients;
EmailExportRecipients.discriminator = undefined;
EmailExportRecipients.attributeTypeMap = [
    {
        "name": "notifyURL",
        "baseName": "notifyURL",
        "type": "string"
    },
    {
        "name": "recipientsType",
        "baseName": "recipientsType",
        "type": "EmailExportRecipients.RecipientsTypeEnum"
    }
];
(function (EmailExportRecipients) {
    let RecipientsTypeEnum;
    (function (RecipientsTypeEnum) {
        RecipientsTypeEnum[RecipientsTypeEnum["All"] = 'all'] = "All";
        RecipientsTypeEnum[RecipientsTypeEnum["NonClickers"] = 'nonClickers'] = "NonClickers";
        RecipientsTypeEnum[RecipientsTypeEnum["NonOpeners"] = 'nonOpeners'] = "NonOpeners";
        RecipientsTypeEnum[RecipientsTypeEnum["Clickers"] = 'clickers'] = "Clickers";
        RecipientsTypeEnum[RecipientsTypeEnum["Openers"] = 'openers'] = "Openers";
        RecipientsTypeEnum[RecipientsTypeEnum["SoftBounces"] = 'softBounces'] = "SoftBounces";
        RecipientsTypeEnum[RecipientsTypeEnum["HardBounces"] = 'hardBounces'] = "HardBounces";
        RecipientsTypeEnum[RecipientsTypeEnum["Unsubscribed"] = 'unsubscribed'] = "Unsubscribed";
    })(RecipientsTypeEnum = EmailExportRecipients.RecipientsTypeEnum || (EmailExportRecipients.RecipientsTypeEnum = {}));
})(EmailExportRecipients = exports.EmailExportRecipients || (exports.EmailExportRecipients = {}));
//# sourceMappingURL=emailExportRecipients.js.map