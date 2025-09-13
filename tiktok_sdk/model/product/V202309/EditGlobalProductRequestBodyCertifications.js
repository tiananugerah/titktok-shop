"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditGlobalProductRequestBodyCertifications = void 0;
class Product202309EditGlobalProductRequestBodyCertifications {
    static getAttributeTypeMap() {
        return Product202309EditGlobalProductRequestBodyCertifications.attributeTypeMap;
    }
}
exports.Product202309EditGlobalProductRequestBodyCertifications = Product202309EditGlobalProductRequestBodyCertifications;
Product202309EditGlobalProductRequestBodyCertifications.discriminator = undefined;
Product202309EditGlobalProductRequestBodyCertifications.attributeTypeMap = [
    {
        "name": "files",
        "baseName": "files",
        "type": "Array<Product202309EditGlobalProductRequestBodyCertificationsFiles>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<Product202309EditGlobalProductRequestBodyCertificationsImages>"
    }
];
//# sourceMappingURL=EditGlobalProductRequestBodyCertifications.js.map