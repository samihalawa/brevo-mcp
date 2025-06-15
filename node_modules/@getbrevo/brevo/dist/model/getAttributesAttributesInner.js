"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAttributesAttributesInner = void 0;
class GetAttributesAttributesInner {
    static getAttributeTypeMap() {
        return GetAttributesAttributesInner.attributeTypeMap;
    }
}
exports.GetAttributesAttributesInner = GetAttributesAttributesInner;
GetAttributesAttributesInner.discriminator = undefined;
GetAttributesAttributesInner.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "category",
        "baseName": "category",
        "type": "GetAttributesAttributesInner.CategoryEnum"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "GetAttributesAttributesInner.TypeEnum"
    },
    {
        "name": "enumeration",
        "baseName": "enumeration",
        "type": "Array<GetAttributesAttributesInnerEnumerationInner>"
    },
    {
        "name": "calculatedValue",
        "baseName": "calculatedValue",
        "type": "string"
    }
];
(function (GetAttributesAttributesInner) {
    let CategoryEnum;
    (function (CategoryEnum) {
        CategoryEnum[CategoryEnum["Normal"] = 'normal'] = "Normal";
        CategoryEnum[CategoryEnum["Transactional"] = 'transactional'] = "Transactional";
        CategoryEnum[CategoryEnum["Category"] = 'category'] = "Category";
        CategoryEnum[CategoryEnum["Calculated"] = 'calculated'] = "Calculated";
        CategoryEnum[CategoryEnum["Global"] = 'global'] = "Global";
    })(CategoryEnum = GetAttributesAttributesInner.CategoryEnum || (GetAttributesAttributesInner.CategoryEnum = {}));
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Text"] = 'text'] = "Text";
        TypeEnum[TypeEnum["Date"] = 'date'] = "Date";
        TypeEnum[TypeEnum["Float"] = 'float'] = "Float";
        TypeEnum[TypeEnum["Id"] = 'id'] = "Id";
        TypeEnum[TypeEnum["Boolean"] = 'boolean'] = "Boolean";
    })(TypeEnum = GetAttributesAttributesInner.TypeEnum || (GetAttributesAttributesInner.TypeEnum = {}));
})(GetAttributesAttributesInner = exports.GetAttributesAttributesInner || (exports.GetAttributesAttributesInner = {}));
//# sourceMappingURL=getAttributesAttributesInner.js.map