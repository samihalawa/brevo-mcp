"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileDownloadableLink = void 0;
class FileDownloadableLink {
    static getAttributeTypeMap() {
        return FileDownloadableLink.attributeTypeMap;
    }
}
exports.FileDownloadableLink = FileDownloadableLink;
FileDownloadableLink.discriminator = undefined;
FileDownloadableLink.attributeTypeMap = [
    {
        "name": "fileUrl",
        "baseName": "fileUrl",
        "type": "string"
    }
];
//# sourceMappingURL=fileDownloadableLink.js.map