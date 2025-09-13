"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309RecommendCategoryResponse = void 0;
class Product202309RecommendCategoryResponse {
    static getAttributeTypeMap() {
        return Product202309RecommendCategoryResponse.attributeTypeMap;
    }
}
exports.Product202309RecommendCategoryResponse = Product202309RecommendCategoryResponse;
Product202309RecommendCategoryResponse.discriminator = undefined;
Product202309RecommendCategoryResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309RecommendCategoryResponseData"
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
//# sourceMappingURL=RecommendCategoryResponse.js.map