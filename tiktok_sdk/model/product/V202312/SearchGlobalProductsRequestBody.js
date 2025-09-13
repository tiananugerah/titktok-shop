"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202312SearchGlobalProductsRequestBody = void 0;
class Product202312SearchGlobalProductsRequestBody {
    static getAttributeTypeMap() {
        return Product202312SearchGlobalProductsRequestBody.attributeTypeMap;
    }
}
exports.Product202312SearchGlobalProductsRequestBody = Product202312SearchGlobalProductsRequestBody;
Product202312SearchGlobalProductsRequestBody.discriminator = undefined;
Product202312SearchGlobalProductsRequestBody.attributeTypeMap = [
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