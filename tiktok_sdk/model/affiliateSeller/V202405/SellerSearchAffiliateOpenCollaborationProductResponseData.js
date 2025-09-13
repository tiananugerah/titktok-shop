"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseData = void 0;
class AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseData = AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseData;
AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseData.discriminator = undefined;
AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProducts>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=SellerSearchAffiliateOpenCollaborationProductResponseData.js.map