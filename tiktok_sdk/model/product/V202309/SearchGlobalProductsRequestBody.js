"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309SearchGlobalProductsRequestBody = void 0;
class Product202309SearchGlobalProductsRequestBody {
    static getAttributeTypeMap() {
        return Product202309SearchGlobalProductsRequestBody.attributeTypeMap;
    }
}
exports.Product202309SearchGlobalProductsRequestBody = Product202309SearchGlobalProductsRequestBody;
Product202309SearchGlobalProductsRequestBody.discriminator = undefined;
Product202309SearchGlobalProductsRequestBody.attributeTypeMap = [
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
//# sourceMappingURL=SearchGlobalProductsRequestBody.js.map