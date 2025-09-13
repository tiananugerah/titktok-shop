"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CheckProductListingRequestBodyCertifications = void 0;
class Product202309CheckProductListingRequestBodyCertifications {
    static getAttributeTypeMap() {
        return Product202309CheckProductListingRequestBodyCertifications.attributeTypeMap;
    }
}
exports.Product202309CheckProductListingRequestBodyCertifications = Product202309CheckProductListingRequestBodyCertifications;
Product202309CheckProductListingRequestBodyCertifications.discriminator = undefined;
Product202309CheckProductListingRequestBodyCertifications.attributeTypeMap = [
    {
        "name": "expirationDate",
        "baseName": "expiration_date",
        "type": "number"
    },
    {
        "name": "files",
        "baseName": "files",
        "type": "Array<Product202309CheckProductListingRequestBodyCertificationsFiles>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<Product202309CheckProductListingRequestBodyCertificationsImages>"
    }
];
//# sourceMappingURL=CheckProductListingRequestBodyCertifications.js.map