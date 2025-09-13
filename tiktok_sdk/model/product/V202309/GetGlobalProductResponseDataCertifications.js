"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalProductResponseDataCertifications = void 0;
class Product202309GetGlobalProductResponseDataCertifications {
    static getAttributeTypeMap() {
        return Product202309GetGlobalProductResponseDataCertifications.attributeTypeMap;
    }
}
exports.Product202309GetGlobalProductResponseDataCertifications = Product202309GetGlobalProductResponseDataCertifications;
Product202309GetGlobalProductResponseDataCertifications.discriminator = undefined;
Product202309GetGlobalProductResponseDataCertifications.attributeTypeMap = [
    {
        "name": "files",
        "baseName": "files",
        "type": "Array<Product202309GetGlobalProductResponseDataCertificationsFiles>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<Product202309GetGlobalProductResponseDataCertificationsImages>"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
//# sourceMappingURL=GetGlobalProductResponseDataCertifications.js.map