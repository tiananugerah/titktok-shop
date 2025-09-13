"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202411DiagnoseandOptimizeProductResponseData = void 0;
class Product202411DiagnoseandOptimizeProductResponseData {
    static getAttributeTypeMap() {
        return Product202411DiagnoseandOptimizeProductResponseData.attributeTypeMap;
    }
}
exports.Product202411DiagnoseandOptimizeProductResponseData = Product202411DiagnoseandOptimizeProductResponseData;
Product202411DiagnoseandOptimizeProductResponseData.discriminator = undefined;
Product202411DiagnoseandOptimizeProductResponseData.attributeTypeMap = [
    {
        "name": "diagnoses",
        "baseName": "diagnoses",
        "type": "Array<Product202411DiagnoseandOptimizeProductResponseDataDiagnoses>"
    },
    {
        "name": "listingQuality",
        "baseName": "listing_quality",
        "type": "Product202411DiagnoseandOptimizeProductResponseDataListingQuality"
    }
];
//# sourceMappingURL=DiagnoseandOptimizeProductResponseData.js.map