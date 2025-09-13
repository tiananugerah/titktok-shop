"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309RecommendGlobalCategoriesResponse = void 0;
class Product202309RecommendGlobalCategoriesResponse {
    static getAttributeTypeMap() {
        return Product202309RecommendGlobalCategoriesResponse.attributeTypeMap;
    }
}
exports.Product202309RecommendGlobalCategoriesResponse = Product202309RecommendGlobalCategoriesResponse;
Product202309RecommendGlobalCategoriesResponse.discriminator = undefined;
Product202309RecommendGlobalCategoriesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309RecommendGlobalCategoriesResponseData"
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
//# sourceMappingURL=RecommendGlobalCategoriesResponse.js.map