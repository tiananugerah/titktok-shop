"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309CreateGlobalProductResponseData = void 0;
class Product202309CreateGlobalProductResponseData {
    static getAttributeTypeMap() {
        return Product202309CreateGlobalProductResponseData.attributeTypeMap;
    }
}
exports.Product202309CreateGlobalProductResponseData = Product202309CreateGlobalProductResponseData;
Product202309CreateGlobalProductResponseData.discriminator = undefined;
Product202309CreateGlobalProductResponseData.attributeTypeMap = [
    {
        "name": "globalProductId",
        "baseName": "global_product_id",
        "type": "string"
    },
    {
        "name": "globalSkus",
        "baseName": "global_skus",
        "type": "Array<Product202309CreateGlobalProductResponseDataGlobalSkus>"
    }
];
//# sourceMappingURL=CreateGlobalProductResponseData.js.map