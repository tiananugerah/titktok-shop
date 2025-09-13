"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateGlobalProductRequestBodyCertifications = void 0;
class Product202309CreateGlobalProductRequestBodyCertifications {
    static getAttributeTypeMap() {
        return Product202309CreateGlobalProductRequestBodyCertifications.attributeTypeMap;
    }
}
exports.Product202309CreateGlobalProductRequestBodyCertifications = Product202309CreateGlobalProductRequestBodyCertifications;
Product202309CreateGlobalProductRequestBodyCertifications.discriminator = undefined;
Product202309CreateGlobalProductRequestBodyCertifications.attributeTypeMap = [
    {
        "name": "files",
        "baseName": "files",
        "type": "Array<Product202309CreateGlobalProductRequestBodyCertificationsFiles>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<Product202309CreateGlobalProductRequestBodyCertificationsImages>"
    }
];
//# sourceMappingURL=CreateGlobalProductRequestBodyCertifications.js.map