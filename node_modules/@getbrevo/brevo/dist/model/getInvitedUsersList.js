"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInvitedUsersList = void 0;
class GetInvitedUsersList {
    static getAttributeTypeMap() {
        return GetInvitedUsersList.attributeTypeMap;
    }
}
exports.GetInvitedUsersList = GetInvitedUsersList;
GetInvitedUsersList.discriminator = undefined;
GetInvitedUsersList.attributeTypeMap = [
    {
        "name": "users",
        "baseName": "users",
        "type": "Array<GetInvitedUsersListUsersInner>"
    }
];
//# sourceMappingURL=getInvitedUsersList.js.map