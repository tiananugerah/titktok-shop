"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Affiliate202309GetShowcaseProductsoldResponseDataProductsPrice = void 0;
class Affiliate202309GetShowcaseProductsoldResponseDataProductsPrice {
    static getAttributeTypeMap() {
        return Affiliate202309GetShowcaseProductsoldResponseDataProductsPrice.attributeTypeMap;
    }
}
exports.Affiliate202309GetShowcaseProductsoldResponseDataProductsPrice = Affiliate202309GetShowcaseProductsoldResponseDataProductsPrice;
Affiliate202309GetShowcaseProductsoldResponseDataProductsPrice.discriminator = undefined;
Affiliate202309GetShowcaseProductsoldResponseDataProductsPrice.attributeTypeMap = [
    {
        "name": "originalPrice",
        "baseName": "original_price",
        "type": "Affiliate202309GetShowcaseProductsoldResponseDataProductsPriceOriginalPrice"
    },
    {
        "name": "platformDiscountPrice",
        "baseName": "platform_discount_price",
        "type": "Affiliate202309GetShowcaseProductsoldResponseDataProductsPricePlatformDiscountPrice"
    },
    {
        "name": "sellerDiscountPrice",
        "baseName": "seller_discount_price",
        "type": "Affiliate202309GetShowcaseProductsoldResponseDataProductsPriceSellerDiscountPrice"
    }
];
//# sourceMappingURL=GetShowcaseProductsoldResponseDataProductsPrice.js.map