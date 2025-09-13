"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetGlobalCategoriesResponse = void 0;
class Product202309GetGlobalCategoriesResponse {
    static getAttributeTypeMap() {
        return Product202309GetGlobalCategoriesResponse.attributeTypeMap;
    }
}
exports.Product202309GetGlobalCategoriesResponse = Product202309GetGlobalCategoriesResponse;
Product202309GetGlobalCategoriesResponse.discriminator = undefined;
Product202309GetGlobalCategoriesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309GetGlobalCategoriesResponseData"
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
//# sourceMappingURL=GetGlobalCategoriesResponse.js.map