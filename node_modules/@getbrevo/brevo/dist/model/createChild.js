"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateChild = void 0;
class CreateChild {
    static getAttributeTypeMap() {
        return CreateChild.attributeTypeMap;
    }
}
exports.CreateChild = CreateChild;
CreateChild.discriminator = undefined;
CreateChild.attributeTypeMap = [
    {
        "name": "email",
        "baseName": "email",
        "type": "string"
    },
    {
        "name": "firstName",
        "baseName": "firstName",
        "type": "string"
    },
    {
        "name": "lastName",
        "baseName": "lastName",
        "type": "string"
    },
    {
        "name": "companyName",
        "baseName": "companyName",
        "type": "string"
    },
    {
        "name": "password",
        "baseName": "password",
        "type": "string"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "CreateChild.LanguageEnum"
    }
];
(function (CreateChild) {
    let LanguageEnum;
    (function (LanguageEnum) {
        LanguageEnum[LanguageEnum["Fr"] = 'fr'] = "Fr";
        LanguageEnum[LanguageEnum["Es"] = 'es'] = "Es";
        LanguageEnum[LanguageEnum["Pt"] = 'pt'] = "Pt";
        LanguageEnum[LanguageEnum["It"] = 'it'] = "It";
        LanguageEnum[LanguageEnum["De"] = 'de'] = "De";
        LanguageEnum[LanguageEnum["En"] = 'en'] = "En";
    })(LanguageEnum = CreateChild.LanguageEnum || (CreateChild.LanguageEnum = {}));
})(CreateChild = exports.CreateChild || (exports.CreateChild = {}));
//# sourceMappingURL=createChild.js.map