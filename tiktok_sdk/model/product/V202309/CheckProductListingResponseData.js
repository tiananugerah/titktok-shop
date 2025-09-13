"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CheckProductListingResponseData = void 0;
class Product202309CheckProductListingResponseData {
    static getAttributeTypeMap() {
        return Product202309CheckProductListingResponseData.attributeTypeMap;
    }
}
exports.Product202309CheckProductListingResponseData = Product202309CheckProductListingResponseData;
Product202309CheckProductListingResponseData.discriminator = undefined;
Product202309CheckProductListingResponseData.attributeTypeMap = [
    {
        "name": "checkResult",
        "baseName": "check_result",
        "type": "string"
    },
    {
        "name": "diagnoses",
        "baseName": "diagnoses",
        "type": "Array<Product202309CheckProductListingResponseDataDiagnoses>"
    },
    {
        "name": "failReasons",
        "baseName": "fail_reasons",
        "type": "Array<Product202309CheckProductListingResponseDataFailReasons>"
    },
    {
        "name": "listingQuality",
        "baseName": "listing_quality",
        "type": "Product202309CheckProductListingResponseDataListingQuality"
    },
    {
        "name": "warnings",
        "baseName": "warnings",
        "type": "Product202309CheckProductListingResponseDataWarnings"
    }
];
//# sourceMappingURL=CheckProductListingResponseData.js.map