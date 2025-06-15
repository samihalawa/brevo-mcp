"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImageToGallery = void 0;
class UploadImageToGallery {
    static getAttributeTypeMap() {
        return UploadImageToGallery.attributeTypeMap;
    }
}
exports.UploadImageToGallery = UploadImageToGallery;
UploadImageToGallery.discriminator = undefined;
UploadImageToGallery.attributeTypeMap = [
    {
        "name": "imageUrl",
        "baseName": "imageUrl",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];
//# sourceMappingURL=uploadImageToGallery.js.map