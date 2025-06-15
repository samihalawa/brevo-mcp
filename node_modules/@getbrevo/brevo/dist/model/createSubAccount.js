"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSubAccount = void 0;
class CreateSubAccount {
    static getAttributeTypeMap() {
        return CreateSubAccount.attributeTypeMap;
    }
}
exports.CreateSubAccount = CreateSubAccount;
CreateSubAccount.discriminator = undefined;
CreateSubAccount.attributeTypeMap = [
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "CreateSubAccount.LanguageEnum"
    },
    {
        "name": "timezone",
        "baseName": "timezone",
        "type": "string"
    },
    {
        "name": "groupIds",
        "baseName": "groupIds",
        "type": "Array<string>"
    }
];
(function (CreateSubAccount) {
    let LanguageEnum;
    (function (LanguageEnum) {
        LanguageEnum[LanguageEnum["En"] = 'en'] = "En";
        LanguageEnum[LanguageEnum["Fr"] = 'fr'] = "Fr";
        LanguageEnum[LanguageEnum["It"] = 'it'] = "It";
        LanguageEnum[LanguageEnum["Es"] = 'es'] = "Es";
        LanguageEnum[LanguageEnum["Pt"] = 'pt'] = "Pt";
        LanguageEnum[LanguageEnum["De"] = 'de'] = "De";
    })(LanguageEnum = CreateSubAccount.LanguageEnum || (CreateSubAccount.LanguageEnum = {}));
})(CreateSubAccount = exports.CreateSubAccount || (exports.CreateSubAccount = {}));
//# sourceMappingURL=createSubAccount.js.map