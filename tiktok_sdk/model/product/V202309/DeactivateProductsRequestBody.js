"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309DeactivateProductsRequestBody = void 0;
class Product202309DeactivateProductsRequestBody {
    static getAttributeTypeMap() {
        return Product202309DeactivateProductsRequestBody.attributeTypeMap;
    }
}
exports.Product202309DeactivateProductsRequestBody = Product202309DeactivateProductsRequestBody;
Product202309DeactivateProductsRequestBody.discriminator = undefined;
Product202309DeactivateProductsRequestBody.attributeTypeMap = [
    {
        "name": "listingPlatforms",
        "baseName": "listing_platforms",
        "type": "Array<string>"
    },
    {
        "name": "productIds",
        "baseName": "product_ids",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=DeactivateProductsRequestBody.js.map