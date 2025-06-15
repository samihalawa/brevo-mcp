"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWhatsAppConfig = void 0;
class GetWhatsAppConfig {
    static getAttributeTypeMap() {
        return GetWhatsAppConfig.attributeTypeMap;
    }
}
exports.GetWhatsAppConfig = GetWhatsAppConfig;
GetWhatsAppConfig.discriminator = undefined;
GetWhatsAppConfig.attributeTypeMap = [
    {
        "name": "whatsappBusinessAccountId",
        "baseName": "whatsappBusinessAccountId",
        "type": "string"
    },
    {
        "name": "sendingLimit",
        "baseName": "sendingLimit",
        "type": "string"
    },
    {
        "name": "phoneNumberQuality",
        "baseName": "phoneNumberQuality",
        "type": "GetWhatsAppConfig.PhoneNumberQualityEnum"
    },
    {
        "name": "whatsappBusinessAccountStatus",
        "baseName": "whatsappBusinessAccountStatus",
        "type": "string"
    },
    {
        "name": "businessStatus",
        "baseName": "businessStatus",
        "type": "string"
    },
    {
        "name": "phoneNumberNameStatus",
        "baseName": "phoneNumberNameStatus",
        "type": "GetWhatsAppConfig.PhoneNumberNameStatusEnum"
    }
];
(function (GetWhatsAppConfig) {
    let PhoneNumberQualityEnum;
    (function (PhoneNumberQualityEnum) {
        PhoneNumberQualityEnum[PhoneNumberQualityEnum["Green"] = 'GREEN'] = "Green";
        PhoneNumberQualityEnum[PhoneNumberQualityEnum["Yellow"] = 'YELLOW'] = "Yellow";
        PhoneNumberQualityEnum[PhoneNumberQualityEnum["Red"] = 'RED'] = "Red";
    })(PhoneNumberQualityEnum = GetWhatsAppConfig.PhoneNumberQualityEnum || (GetWhatsAppConfig.PhoneNumberQualityEnum = {}));
    let PhoneNumberNameStatusEnum;
    (function (PhoneNumberNameStatusEnum) {
        PhoneNumberNameStatusEnum[PhoneNumberNameStatusEnum["Approved"] = 'APPROVED'] = "Approved";
        PhoneNumberNameStatusEnum[PhoneNumberNameStatusEnum["Pending"] = 'PENDING'] = "Pending";
        PhoneNumberNameStatusEnum[PhoneNumberNameStatusEnum["Rejected"] = 'REJECTED'] = "Rejected";
    })(PhoneNumberNameStatusEnum = GetWhatsAppConfig.PhoneNumberNameStatusEnum || (GetWhatsAppConfig.PhoneNumberNameStatusEnum = {}));
})(GetWhatsAppConfig = exports.GetWhatsAppConfig || (exports.GetWhatsAppConfig = {}));
//# sourceMappingURL=getWhatsAppConfig.js.map