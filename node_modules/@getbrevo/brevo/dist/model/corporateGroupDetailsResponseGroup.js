"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorporateGroupDetailsResponseGroup = void 0;
class CorporateGroupDetailsResponseGroup {
    static getAttributeTypeMap() {
        return CorporateGroupDetailsResponseGroup.attributeTypeMap;
    }
}
exports.CorporateGroupDetailsResponseGroup = CorporateGroupDetailsResponseGroup;
CorporateGroupDetailsResponseGroup.discriminator = undefined;
CorporateGroupDetailsResponseGroup.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "groupName",
        "baseName": "groupName",
        "type": "string"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string"
    }
];
//# sourceMappingURL=corporateGroupDetailsResponseGroup.js.map