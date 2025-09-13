"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProducts = void 0;
class AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProducts {
    static getAttributeTypeMap() {
        return AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProducts.attributeTypeMap;
    }
}
exports.AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProducts = AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProducts;
AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProducts.discriminator = undefined;
AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProducts.attributeTypeMap = [
    {
        "name": "category",
        "baseName": "category",
        "type": "AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsCategory"
    },
    {
        "name": "creatorCommissionRate",
        "baseName": "creator_commission_rate",
        "type": "number"
    },
    {
        "name": "highestPrice",
        "baseName": "highest_price",
        "type": "AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsHighestPrice"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "number"
    },
    {
        "name": "isAvailable",
        "baseName": "is_available",
        "type": "boolean"
    },
    {
        "name": "lowestPrice",
        "baseName": "lowest_price",
        "type": "AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsLowestPrice"
    },
    {
        "name": "mainImageUrl",
        "baseName": "main_image_url",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "openCollaborationCommissionRate",
        "baseName": "open_collaboration_commission_rate",
        "type": "number"
    },
    {
        "name": "partnerCommissionRate",
        "baseName": "partner_commission_rate",
        "type": "number"
    },
    {
        "name": "productDescription",
        "baseName": "product_description",
        "type": "string"
    },
    {
        "name": "productSales",
        "baseName": "product_sales",
        "type": "number"
    },
    {
        "name": "reviewStatus",
        "baseName": "review_status",
        "type": "string"
    },
    {
        "name": "sampleQuota",
        "baseName": "sample_quota",
        "type": "number"
    },
    {
        "name": "shopName",
        "baseName": "shop_name",
        "type": "string"
    },
    {
        "name": "skuInformationList",
        "baseName": "sku_information_list",
        "type": "Array<AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationList>"
    },
    {
        "name": "totalCommissionRate",
        "baseName": "total_commission_rate",
        "type": "number"
    }
];
//# sourceMappingURL=GetAffiliatePartnerCampaignProductListResponseDataProducts.js.map