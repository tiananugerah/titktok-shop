"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405GetShowcaseProductsResponseDataProductsPrice = void 0;
class AffiliateCreator202405GetShowcaseProductsResponseDataProductsPrice {
    static getAttributeTypeMap() {
        return AffiliateCreator202405GetShowcaseProductsResponseDataProductsPrice.attributeTypeMap;
    }
}
exports.AffiliateCreator202405GetShowcaseProductsResponseDataProductsPrice = AffiliateCreator202405GetShowcaseProductsResponseDataProductsPrice;
AffiliateCreator202405GetShowcaseProductsResponseDataProductsPrice.discriminator = undefined;
AffiliateCreator202405GetShowcaseProductsResponseDataProductsPrice.attributeTypeMap = [
    {
        "name": "originalPrice",
        "baseName": "original_price",
        "type": "AffiliateCreator202405GetShowcaseProductsResponseDataProductsPriceOriginalPrice"
    },
    {
        "name": "platformDiscountPrice",
        "baseName": "platform_discount_price",
        "type": "AffiliateCreator202405GetShowcaseProductsResponseDataProductsPricePlatformDiscountPrice"
    },
    {
        "name": "sellerDiscountPrice",
        "baseName": "seller_discount_price",
        "type": "AffiliateCreator202405GetShowcaseProductsResponseDataProductsPriceSellerDiscountPrice"
    }
];
//# sourceMappingURL=GetShowcaseProductsResponseDataProductsPrice.js.map