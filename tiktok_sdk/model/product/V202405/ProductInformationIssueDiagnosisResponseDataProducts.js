"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202405ProductInformationIssueDiagnosisResponseDataProducts = void 0;
class Product202405ProductInformationIssueDiagnosisResponseDataProducts {
    static getAttributeTypeMap() {
        return Product202405ProductInformationIssueDiagnosisResponseDataProducts.attributeTypeMap;
    }
}
exports.Product202405ProductInformationIssueDiagnosisResponseDataProducts = Product202405ProductInformationIssueDiagnosisResponseDataProducts;
Product202405ProductInformationIssueDiagnosisResponseDataProducts.discriminator = undefined;
Product202405ProductInformationIssueDiagnosisResponseDataProducts.attributeTypeMap = [
    {
        "name": "diagnoses",
        "baseName": "diagnoses",
        "type": "Array<Product202405ProductInformationIssueDiagnosisResponseDataProductsDiagnoses>"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "listingQuality",
        "baseName": "listing_quality",
        "type": "Product202405ProductInformationIssueDiagnosisResponseDataProductsListingQuality"
    }
];
//# sourceMappingURL=ProductInformationIssueDiagnosisResponseDataProducts.js.map