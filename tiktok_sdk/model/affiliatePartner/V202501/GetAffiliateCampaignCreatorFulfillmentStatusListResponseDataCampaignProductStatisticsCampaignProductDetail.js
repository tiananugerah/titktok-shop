"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetail = void 0;
class AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetail {
    static getAttributeTypeMap() {
        return AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetail.attributeTypeMap;
    }
}
exports.AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetail = AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetail;
AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetail.discriminator = undefined;
AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetail.attributeTypeMap = [
    {
        "name": "creatorCommissionPercent",
        "baseName": "creator_commission_percent",
        "type": "string"
    },
    {
        "name": "indicatorData",
        "baseName": "indicator_data",
        "type": "AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailIndicatorData"
    },
    {
        "name": "partnerCommissionPercent",
        "baseName": "partner_commission_percent",
        "type": "string"
    },
    {
        "name": "planCommissionPercent",
        "baseName": "plan_commission_percent",
        "type": "string"
    },
    {
        "name": "productId",
        "baseName": "product_id",
        "type": "string"
    },
    {
        "name": "productName",
        "baseName": "product_name",
        "type": "string"
    },
    {
        "name": "productPrice",
        "baseName": "product_price",
        "type": "AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailProductPrice"
    },
    {
        "name": "productStatus",
        "baseName": "product_status",
        "type": "string"
    },
    {
        "name": "productStockCount",
        "baseName": "product_stock_count",
        "type": "string"
    },
    {
        "name": "productThumbnail",
        "baseName": "product_thumbnail",
        "type": "AffiliatePartner202501GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetailProductThumbnail"
    },
    {
        "name": "totalCommissionPercent",
        "baseName": "total_commission_percent",
        "type": "string"
    }
];
//# sourceMappingURL=GetAffiliateCampaignCreatorFulfillmentStatusListResponseDataCampaignProductStatisticsCampaignProductDetail.js.map