"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataCertifications = void 0;
class Product202309GetProductResponseDataCertifications {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataCertifications.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataCertifications = Product202309GetProductResponseDataCertifications;
Product202309GetProductResponseDataCertifications.discriminator = undefined;
Product202309GetProductResponseDataCertifications.attributeTypeMap = [
    {
        "name": "expirationDate",
        "baseName": "expiration_date",
        "type": "number"
    },
    {
        "name": "files",
        "baseName": "files",
        "type": "Array<Product202309GetProductResponseDataCertificationsFiles>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "images",
        "baseName": "images",
        "type": "Array<Product202309GetProductResponseDataCertificationsImages>"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
//# sourceMappingURL=GetProductResponseDataCertifications.js.map