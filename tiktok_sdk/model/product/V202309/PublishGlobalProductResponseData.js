"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PublishGlobalProductResponseData = void 0;
class Product202309PublishGlobalProductResponseData {
    static getAttributeTypeMap() {
        return Product202309PublishGlobalProductResponseData.attributeTypeMap;
    }
}
exports.Product202309PublishGlobalProductResponseData = Product202309PublishGlobalProductResponseData;
Product202309PublishGlobalProductResponseData.discriminator = undefined;
Product202309PublishGlobalProductResponseData.attributeTypeMap = [
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<Product202309PublishGlobalProductResponseDataProducts>"
    },
    {
        "name": "publishResult",
        "baseName": "publish_result",
        "type": "Array<Product202309PublishGlobalProductResponseDataPublishResult>"
    }
];
//# sourceMappingURL=PublishGlobalProductResponseData.js.map