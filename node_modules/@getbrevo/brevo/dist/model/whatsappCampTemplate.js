"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappCampTemplate = void 0;
class WhatsappCampTemplate {
    static getAttributeTypeMap() {
        return WhatsappCampTemplate.attributeTypeMap;
    }
}
exports.WhatsappCampTemplate = WhatsappCampTemplate;
WhatsappCampTemplate.discriminator = undefined;
WhatsappCampTemplate.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "string"
    },
    {
        "name": "language",
        "baseName": "language",
        "type": "string"
    },
    {
        "name": "containsButton",
        "baseName": "contains_button",
        "type": "boolean"
    },
    {
        "name": "displayHeader",
        "baseName": "display_header",
        "type": "boolean"
    },
    {
        "name": "headerType",
        "baseName": "header_type",
        "type": "string"
    },
    {
        "name": "components",
        "baseName": "components",
        "type": "Array<ComponentItems>"
    },
    {
        "name": "headerVariables",
        "baseName": "header_variables",
        "type": "Array<VariablesItems>"
    },
    {
        "name": "bodyVariables",
        "baseName": "body_variables",
        "type": "Array<VariablesItems>"
    },
    {
        "name": "buttonType",
        "baseName": "button_type",
        "type": "string"
    },
    {
        "name": "hideFooter",
        "baseName": "hide_footer",
        "type": "boolean"
    }
];
//# sourceMappingURL=whatsappCampTemplate.js.map