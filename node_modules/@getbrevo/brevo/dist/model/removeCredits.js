"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveCredits = void 0;
class RemoveCredits {
    static getAttributeTypeMap() {
        return RemoveCredits.attributeTypeMap;
    }
}
exports.RemoveCredits = RemoveCredits;
RemoveCredits.discriminator = undefined;
RemoveCredits.attributeTypeMap = [
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
//# sourceMappingURL=removeCredits.js.map