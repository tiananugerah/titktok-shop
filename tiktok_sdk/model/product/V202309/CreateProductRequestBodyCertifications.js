"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateProductRequestBodyCertifications = void 0;
class Product202309CreateProductRequestBodyCertifications {
    static getAttributeTypeMap() {
        return Product202309CreateProductRequestBodyCertifications.attributeTypeMap;
    }
}
exports.Product202309CreateProductRequestBodyCertifications = Product202309CreateProductRequestBodyCertifications;
Product202309CreateProductRequestBodyCertifications.discriminator = undefined;
Product202309CreateProductRequestBodyCertifications.attributeTypeMap = [
    {
        "name": "expirationDate",
        "baseName": "expiration_date",
        "type": "number"
    },
    {
        "name": "files",
        "baseName": "files",
        "type": "Array<Product202309CreateProductRequestBodyCertificationsFiles>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<Product202309CreateProductRequestBodyCertificationsImages>"
    }
];
//# sourceMappingURL=CreateProductRequestBodyCertifications.js.map