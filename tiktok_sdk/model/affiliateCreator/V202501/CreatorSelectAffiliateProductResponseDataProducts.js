"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProducts = void 0;
class AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProducts {
    static getAttributeTypeMap() {
        return AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProducts.attributeTypeMap;
    }
}
exports.AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProducts = AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProducts;
AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProducts.discriminator = undefined;
AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProducts.attributeTypeMap = [
    {
        "name": "brandName",
        "baseName": "brand_name",
        "type": "string"
    },
    {
        "name": "commission",
        "baseName": "commission",
        "type": "AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsCommission"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "mainImageUrl",
        "baseName": "main_image_url",
        "type": "string"
    },
    {
        "name": "marketPerformance",
        "baseName": "market_performance",
        "type": "AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsMarketPerformance"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsPrice"
    },
    {
        "name": "review",
        "baseName": "review",
        "type": "AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsReview"
    },
    {
        "name": "shop",
        "baseName": "shop",
        "type": "AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsShop"
    },
    {
        "name": "stock",
        "baseName": "stock",
        "type": "AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProductsStock"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
//# sourceMappingURL=CreatorSelectAffiliateProductResponseDataProducts.js.map