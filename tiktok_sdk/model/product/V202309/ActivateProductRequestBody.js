"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309ActivateProductRequestBody = void 0;
class Product202309ActivateProductRequestBody {
    static getAttributeTypeMap() {
        return Product202309ActivateProductRequestBody.attributeTypeMap;
    }
}
exports.Product202309ActivateProductRequestBody = Product202309ActivateProductRequestBody;
Product202309ActivateProductRequestBody.discriminator = undefined;
Product202309ActivateProductRequestBody.attributeTypeMap = [
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
//# sourceMappingURL=ActivateProductRequestBody.js.map