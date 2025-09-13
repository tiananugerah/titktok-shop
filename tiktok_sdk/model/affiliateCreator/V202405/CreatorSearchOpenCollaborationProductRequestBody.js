"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBody = void 0;
class AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBody {
    static getAttributeTypeMap() {
        return AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBody.attributeTypeMap;
    }
}
exports.AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBody = AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBody;
AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBody.discriminator = undefined;
AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBody.attributeTypeMap = [
    {
        "name": "category",
        "baseName": "category",
        "type": "AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBodyCategory"
    },
    {
        "name": "commissionRateRange",
        "baseName": "commission_rate_range",
        "type": "AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBodyCommissionRateRange"
    },
    {
        "name": "salesPriceRange",
        "baseName": "sales_price_range",
        "type": "AffiliateCreator202405CreatorSearchOpenCollaborationProductRequestBodySalesPriceRange"
    },
    {
        "name": "titleKeywords",
        "baseName": "title_keywords",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=CreatorSearchOpenCollaborationProductRequestBody.js.map