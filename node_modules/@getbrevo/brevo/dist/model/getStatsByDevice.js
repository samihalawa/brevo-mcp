"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStatsByDevice = void 0;
class GetStatsByDevice {
    static getAttributeTypeMap() {
        return GetStatsByDevice.attributeTypeMap;
    }
}
exports.GetStatsByDevice = GetStatsByDevice;
GetStatsByDevice.discriminator = undefined;
GetStatsByDevice.attributeTypeMap = [
    {
        "name": "desktop",
        "baseName": "desktop",
        "type": "{ [key: string]: GetDeviceBrowserStats; }"
    },
    {
        "name": "mobile",
        "baseName": "mobile",
        "type": "{ [key: string]: GetDeviceBrowserStats; }"
    },
    {
        "name": "tablet",
        "baseName": "tablet",
        "type": "{ [key: string]: GetDeviceBrowserStats; }"
    },
    {
        "name": "unknown",
        "baseName": "unknown",
        "type": "{ [key: string]: GetDeviceBrowserStats; }"
    }
];
//# sourceMappingURL=getStatsByDevice.js.map