"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParams = void 0;
class AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParams {
    static getAttributeTypeMap() {
        return AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParams.attributeTypeMap;
    }
}
exports.AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParams = AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParams;
AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParams.discriminator = undefined;
AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParams.attributeTypeMap = [
    {
        "name": "categoryIds",
        "baseName": "category_ids",
        "type": "Array<string>"
    },
    {
        "name": "commissionRateRange",
        "baseName": "commission_rate_range",
        "type": "AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParamsCommissionRateRange"
    },
    {
        "name": "poolIds",
        "baseName": "pool_ids",
        "type": "Array<string>"
    },
    {
        "name": "priceRange",
        "baseName": "price_range",
        "type": "AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParamsPriceRange"
    },
    {
        "name": "productIds",
        "baseName": "product_ids",
        "type": "Array<string>"
    },
    {
        "name": "shopRatingRange",
        "baseName": "shop_rating_range",
        "type": "AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParamsShopRatingRange"
    },
    {
        "name": "soldQuantityRange",
        "baseName": "sold_quantity_range",
        "type": "AffiliateCreator202501CreatorSelectAffiliateProductRequestBodyFilterParamsSoldQuantityRange"
    },
    {
        "name": "titleKeyword",
        "baseName": "title_keyword",
        "type": "string"
    }
];
//# sourceMappingURL=CreatorSelectAffiliateProductRequestBodyFilterParams.js.map