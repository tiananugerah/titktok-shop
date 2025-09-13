"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PartialEditProductRequestBodyCertifications = void 0;
class Product202309PartialEditProductRequestBodyCertifications {
    static getAttributeTypeMap() {
        return Product202309PartialEditProductRequestBodyCertifications.attributeTypeMap;
    }
}
exports.Product202309PartialEditProductRequestBodyCertifications = Product202309PartialEditProductRequestBodyCertifications;
Product202309PartialEditProductRequestBodyCertifications.discriminator = undefined;
Product202309PartialEditProductRequestBodyCertifications.attributeTypeMap = [
    {
        "name": "expirationDate",
        "baseName": "expiration_date",
        "type": "number"
    },
    {
        "name": "files",
        "baseName": "files",
        "type": "Array<Product202309PartialEditProductRequestBodyCertificationsFiles>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<Product202309PartialEditProductRequestBodyCertificationsImages>"
    }
];
//# sourceMappingURL=PartialEditProductRequestBodyCertifications.js.map