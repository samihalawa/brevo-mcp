"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateDomainModel = void 0;
class AuthenticateDomainModel {
    static getAttributeTypeMap() {
        return AuthenticateDomainModel.attributeTypeMap;
    }
}
exports.AuthenticateDomainModel = AuthenticateDomainModel;
AuthenticateDomainModel.discriminator = undefined;
AuthenticateDomainModel.attributeTypeMap = [
    {
        "name": "domainName",
        "baseName": "domain_name",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    }
];
//# sourceMappingURL=authenticateDomainModel.js.map