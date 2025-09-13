"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309PublishGlobalProductRequestBodyPublishTargetSkus = void 0;
class Product202309PublishGlobalProductRequestBodyPublishTargetSkus {
    static getAttributeTypeMap() {
        return Product202309PublishGlobalProductRequestBodyPublishTargetSkus.attributeTypeMap;
    }
}
exports.Product202309PublishGlobalProductRequestBodyPublishTargetSkus = Product202309PublishGlobalProductRequestBodyPublishTargetSkus;
Product202309PublishGlobalProductRequestBodyPublishTargetSkus.discriminator = undefined;
Product202309PublishGlobalProductRequestBodyPublishTargetSkus.attributeTypeMap = [
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "Product202309PublishGlobalProductRequestBodyPublishTargetSkusInventory"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "Product202309PublishGlobalProductRequestBodyPublishTargetSkusPrice"
    },
    {
        "name": "relatedGlobalSkuId",
        "baseName": "related_global_sku_id",
        "type": "string"
    }
];
//# sourceMappingURL=PublishGlobalProductRequestBodyPublishTargetSkus.js.map