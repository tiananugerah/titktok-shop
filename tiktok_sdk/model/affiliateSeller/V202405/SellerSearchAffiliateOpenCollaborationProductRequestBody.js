"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBody = void 0;
class AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBody {
    static getAttributeTypeMap() {
        return AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBody.attributeTypeMap;
    }
}
exports.AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBody = AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBody;
AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBody.discriminator = undefined;
AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBody.attributeTypeMap = [
    {
        "name": "category",
        "baseName": "category",
        "type": "AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBodyCategory"
    },
    {
        "name": "commissionRateRange",
        "baseName": "commission_rate_range",
        "type": "AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBodyCommissionRateRange"
    },
    {
        "name": "salesPriceRange",
        "baseName": "sales_price_range",
        "type": "AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductRequestBodySalesPriceRange"
    },
    {
        "name": "titleKeywords",
        "baseName": "title_keywords",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=SellerSearchAffiliateOpenCollaborationProductRequestBody.js.map