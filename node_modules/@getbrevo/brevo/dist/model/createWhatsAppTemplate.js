"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWhatsAppTemplate = void 0;
class CreateWhatsAppTemplate {
    static getAttributeTypeMap() {
        return CreateWhatsAppTemplate.attributeTypeMap;
    }
}
exports.CreateWhatsAppTemplate = CreateWhatsAppTemplate;
CreateWhatsAppTemplate.discriminator = undefined;
CreateWhatsAppTemplate.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "CreateWhatsAppTemplate.CategoryEnum"
    },
    {
        "name": "mediaUrl",
        "baseName": "mediaUrl",
        "type": "string"
    },
    {
        "name": "bodyText",
        "baseName": "bodyText",
        "type": "string"
    },
    {
        "name": "headerText",
        "baseName": "headerText",
        "type": "string"
    },
    {
        "name": "source",
        "baseName": "source",
        "type": "CreateWhatsAppTemplate.SourceEnum"
    }
];
(function (CreateWhatsAppTemplate) {
    let CategoryEnum;
    (function (CategoryEnum) {
        CategoryEnum[CategoryEnum["Marketing"] = 'MARKETING'] = "Marketing";
        CategoryEnum[CategoryEnum["Utility"] = 'UTILITY'] = "Utility";
    })(CategoryEnum = CreateWhatsAppTemplate.CategoryEnum || (CreateWhatsAppTemplate.CategoryEnum = {}));
    let SourceEnum;
    (function (SourceEnum) {
        SourceEnum[SourceEnum["Automation"] = 'Automation'] = "Automation";
        SourceEnum[SourceEnum["Conversations"] = 'Conversations'] = "Conversations";
    })(SourceEnum = CreateWhatsAppTemplate.SourceEnum || (CreateWhatsAppTemplate.SourceEnum = {}));
})(CreateWhatsAppTemplate = exports.CreateWhatsAppTemplate || (exports.CreateWhatsAppTemplate = {}));
//# sourceMappingURL=createWhatsAppTemplate.js.map