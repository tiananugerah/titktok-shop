"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309GetProductResponseDataSubscribeInfo = void 0;
class Product202309GetProductResponseDataSubscribeInfo {
    static getAttributeTypeMap() {
        return Product202309GetProductResponseDataSubscribeInfo.attributeTypeMap;
    }
}
exports.Product202309GetProductResponseDataSubscribeInfo = Product202309GetProductResponseDataSubscribeInfo;
Product202309GetProductResponseDataSubscribeInfo.discriminator = undefined;
Product202309GetProductResponseDataSubscribeInfo.attributeTypeMap = [
    {
        "name": "subscribeDiscountDetails",
        "baseName": "subscribe_discount_details",
        "type": "Array<Product202309GetProductResponseDataSubscribeInfoSubscribeDiscountDetails>"
    },
    {
        "name": "subscribePromotionConfig",
        "baseName": "subscribe_promotion_config",
        "type": "Array<Product202309GetProductResponseDataSubscribeInfoSubscribePromotionConfig>"
    },
    {
        "name": "subscribeStatus",
        "baseName": "subscribe_status",
        "type": "string"
    },
    {
        "name": "supportSubscribe",
        "baseName": "support_subscribe",
        "type": "boolean"
    }
];
//# sourceMappingURL=GetProductResponseDataSubscribeInfo.js.map