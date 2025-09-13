"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309SearchProductsRequestBody = void 0;
class Product202309SearchProductsRequestBody {
    static getAttributeTypeMap() {
        return Product202309SearchProductsRequestBody.attributeTypeMap;
    }
}
exports.Product202309SearchProductsRequestBody = Product202309SearchProductsRequestBody;
Product202309SearchProductsRequestBody.discriminator = undefined;
Product202309SearchProductsRequestBody.attributeTypeMap = [
    {
        "name": "createTimeGe",
        "baseName": "create_time_ge",
        "type": "number"
    },
    {
        "name": "createTimeLe",
        "baseName": "create_time_le",
        "type": "number"
    },
    {
        "name": "sellerSkus",
        "baseName": "seller_skus",
        "type": "Array<string>"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "updateTimeGe",
        "baseName": "update_time_ge",
        "type": "number"
    },
    {
        "name": "updateTimeLe",
        "baseName": "update_time_le",
        "type": "number"
    }
];
//# sourceMappingURL=SearchProductsRequestBody.js.map