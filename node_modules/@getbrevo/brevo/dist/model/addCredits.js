"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCredits = void 0;
class AddCredits {
    static getAttributeTypeMap() {
        return AddCredits.attributeTypeMap;
    }
}
exports.AddCredits = AddCredits;
AddCredits.discriminator = undefined;
AddCredits.attributeTypeMap = [
    {
        "name": "sms",
        "baseName": "sms",
        "type": "number"
    },
    {
        "name": "email",
        "baseName": "email",
        "type": "number"
    }
];
//# sourceMappingURL=addCredits.js.map