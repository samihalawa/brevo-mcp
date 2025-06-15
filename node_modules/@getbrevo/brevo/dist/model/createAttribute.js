"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAttribute = void 0;
class CreateAttribute {
    static getAttributeTypeMap() {
        return CreateAttribute.attributeTypeMap;
    }
}
exports.CreateAttribute = CreateAttribute;
CreateAttribute.discriminator = undefined;
CreateAttribute.attributeTypeMap = [
    {
        "name": "value",
        "baseName": "value",
        "type": "string"
    },
    {
        "name": "isRecurring",
        "baseName": "isRecurring",
        "type": "boolean"
    },
    {
        "name": "enumeration",
        "baseName": "enumeration",
        "type": "Array<CreateAttributeEnumerationInner>"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "CreateAttribute.TypeEnum"
    }
];
(function (CreateAttribute) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Text"] = 'text'] = "Text";
        TypeEnum[TypeEnum["Date"] = 'date'] = "Date";
        TypeEnum[TypeEnum["Float"] = 'float'] = "Float";
        TypeEnum[TypeEnum["Boolean"] = 'boolean'] = "Boolean";
        TypeEnum[TypeEnum["Id"] = 'id'] = "Id";
        TypeEnum[TypeEnum["Category"] = 'category'] = "Category";
    })(TypeEnum = CreateAttribute.TypeEnum || (CreateAttribute.TypeEnum = {}));
})(CreateAttribute = exports.CreateAttribute || (exports.CreateAttribute = {}));
//# sourceMappingURL=createAttribute.js.map