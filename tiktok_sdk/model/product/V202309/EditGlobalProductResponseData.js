"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309EditGlobalProductResponseData = void 0;
class Product202309EditGlobalProductResponseData {
    static getAttributeTypeMap() {
        return Product202309EditGlobalProductResponseData.attributeTypeMap;
    }
}
exports.Product202309EditGlobalProductResponseData = Product202309EditGlobalProductResponseData;
Product202309EditGlobalProductResponseData.discriminator = undefined;
Product202309EditGlobalProductResponseData.attributeTypeMap = [
    {
        "name": "globalSkus",
        "baseName": "global_skus",
        "type": "Array<Product202309EditGlobalProductResponseDataGlobalSkus>"
    },
    {
        "name": "publishResults",
        "baseName": "publish_results",
        "type": "Array<Product202309EditGlobalProductResponseDataPublishResults>"
    }
];
//# sourceMappingURL=EditGlobalProductResponseData.js.map