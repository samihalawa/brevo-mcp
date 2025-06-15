"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUpdateCategory = void 0;
class CreateUpdateCategory {
    constructor() {
        this['updateEnabled'] = false;
    }
    static getAttributeTypeMap() {
        return CreateUpdateCategory.attributeTypeMap;
    }
}
exports.CreateUpdateCategory = CreateUpdateCategory;
CreateUpdateCategory.discriminator = undefined;
CreateUpdateCategory.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string"
    },
    {
        "name": "updateEnabled",
        "baseName": "updateEnabled",
        "type": "boolean"
    },
    {
        "name": "deletedAt",
        "baseName": "deletedAt",
        "type": "string"
    },
    {
        "name": "isDeleted",
        "baseName": "isDeleted",
        "type": "boolean"
    }
];
//# sourceMappingURL=createUpdateCategory.js.map