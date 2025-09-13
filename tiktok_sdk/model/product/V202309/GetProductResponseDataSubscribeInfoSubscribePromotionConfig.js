"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataSubscribeInfoSubscribePromotionConfig = void 0;
class Product202309GetProductResponseDataSubscribeInfoSubscribePromotionConfig {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataSubscribeInfoSubscribePromotionConfig.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataSubscribeInfoSubscribePromotionConfig = Product202309GetProductResponseDataSubscribeInfoSubscribePromotionConfig;
Product202309GetProductResponseDataSubscribeInfoSubscribePromotionConfig.discriminator = undefined;
Product202309GetProductResponseDataSubscribeInfoSubscribePromotionConfig.attributeTypeMap = [
    {
        "name": "discountLevel",
        "baseName": "discount_level",
        "type": "string"
    },
    {
        "name": "discountOptions",
        "baseName": "discount_options",
        "type": "Array<number>"
    },
    {
        "name": "maxDiscount",
        "baseName": "max_discount",
        "type": "number"
    },
    {
        "name": "minDiscount",
        "baseName": "min_discount",
        "type": "number"
    }
];
//# sourceMappingURL=GetProductResponseDataSubscribeInfoSubscribePromotionConfig.js.map