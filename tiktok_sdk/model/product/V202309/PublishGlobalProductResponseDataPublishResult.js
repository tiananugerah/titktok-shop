"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PublishGlobalProductResponseDataPublishResult = void 0;
class Product202309PublishGlobalProductResponseDataPublishResult {
    static getAttributeTypeMap() {
        return Product202309PublishGlobalProductResponseDataPublishResult.attributeTypeMap;
    }
}
exports.Product202309PublishGlobalProductResponseDataPublishResult = Product202309PublishGlobalProductResponseDataPublishResult;
Product202309PublishGlobalProductResponseDataPublishResult.discriminator = undefined;
Product202309PublishGlobalProductResponseDataPublishResult.attributeTypeMap = [
    {
        "name": "failReasons",
        "baseName": "fail_reasons",
        "type": "Array<Product202309PublishGlobalProductResponseDataPublishResultFailReasons>"
    },
    {
        "name": "region",
        "baseName": "region",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
//# sourceMappingURL=PublishGlobalProductResponseDataPublishResult.js.map