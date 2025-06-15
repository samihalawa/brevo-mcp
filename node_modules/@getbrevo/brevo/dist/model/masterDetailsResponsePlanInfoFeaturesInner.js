"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterDetailsResponsePlanInfoFeaturesInner = void 0;
class MasterDetailsResponsePlanInfoFeaturesInner {
    static getAttributeTypeMap() {
        return MasterDetailsResponsePlanInfoFeaturesInner.attributeTypeMap;
    }
}
exports.MasterDetailsResponsePlanInfoFeaturesInner = MasterDetailsResponsePlanInfoFeaturesInner;
MasterDetailsResponsePlanInfoFeaturesInner.discriminator = undefined;
MasterDetailsResponsePlanInfoFeaturesInner.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "unitValue",
        "baseName": "unitValue",
        "type": "string"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "quantityWithOverages",
        "baseName": "quantityWithOverages",
        "type": "number"
    },
    {
        "name": "used",
        "baseName": "used",
        "type": "number"
    },
    {
        "name": "usedOverages",
        "baseName": "usedOverages",
        "type": "number"
    },
    {
        "name": "remaining",
        "baseName": "remaining",
        "type": "number"
    }
];
//# sourceMappingURL=masterDetailsResponsePlanInfoFeaturesInner.js.map