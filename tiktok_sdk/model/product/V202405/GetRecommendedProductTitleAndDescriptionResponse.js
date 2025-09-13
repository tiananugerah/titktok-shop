"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202405GetRecommendedProductTitleAndDescriptionResponse = void 0;
class Product202405GetRecommendedProductTitleAndDescriptionResponse {
    static getAttributeTypeMap() {
        return Product202405GetRecommendedProductTitleAndDescriptionResponse.attributeTypeMap;
    }
}
exports.Product202405GetRecommendedProductTitleAndDescriptionResponse = Product202405GetRecommendedProductTitleAndDescriptionResponse;
Product202405GetRecommendedProductTitleAndDescriptionResponse.discriminator = undefined;
Product202405GetRecommendedProductTitleAndDescriptionResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202405GetRecommendedProductTitleAndDescriptionResponseData"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
//# sourceMappingURL=GetRecommendedProductTitleAndDescriptionResponse.js.map