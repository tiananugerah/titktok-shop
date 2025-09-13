"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetCategoriesResponse = void 0;
class Product202309GetCategoriesResponse {
    static getAttributeTypeMap() {
        return Product202309GetCategoriesResponse.attributeTypeMap;
    }
}
exports.Product202309GetCategoriesResponse = Product202309GetCategoriesResponse;
Product202309GetCategoriesResponse.discriminator = undefined;
Product202309GetCategoriesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Product202309GetCategoriesResponseData"
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
//# sourceMappingURL=GetCategoriesResponse.js.map