"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditProductRequestBodyCertifications = void 0;
class Product202309EditProductRequestBodyCertifications {
    static getAttributeTypeMap() {
        return Product202309EditProductRequestBodyCertifications.attributeTypeMap;
    }
}
exports.Product202309EditProductRequestBodyCertifications = Product202309EditProductRequestBodyCertifications;
Product202309EditProductRequestBodyCertifications.discriminator = undefined;
Product202309EditProductRequestBodyCertifications.attributeTypeMap = [
    {
        "name": "expirationDate",
        "baseName": "expiration_date",
        "type": "number"
    },
    {
        "name": "files",
        "baseName": "files",
        "type": "Array<Product202309EditProductRequestBodyCertificationsFiles>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<Product202309EditProductRequestBodyCertificationsImages>"
    }
];
//# sourceMappingURL=EditProductRequestBodyCertifications.js.map