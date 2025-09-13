"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationList = void 0;
class AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationList {
    static getAttributeTypeMap() {
        return AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationList.attributeTypeMap;
    }
}
exports.AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationList = AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationList;
AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationList.discriminator = undefined;
AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationList.attributeTypeMap = [
    {
        "name": "basePrice",
        "baseName": "base_price",
        "type": "AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListBasePrice"
    },
    {
        "name": "inventory",
        "baseName": "inventory",
        "type": "AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListInventory"
    },
    {
        "name": "properties",
        "baseName": "properties",
        "type": "Array<AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListProperties>"
    },
    {
        "name": "regionPrices",
        "baseName": "region_prices",
        "type": "Array<AffiliatePartner202405GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationListRegionPrices>"
    },
    {
        "name": "skuId",
        "baseName": "sku_id",
        "type": "string"
    },
    {
        "name": "skuName",
        "baseName": "sku_name",
        "type": "string"
    }
];
//# sourceMappingURL=GetAffiliatePartnerCampaignProductListResponseDataProductsSkuInformationList.js.map