"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBody = void 0;
class AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBody {
    static getAttributeTypeMap() {
        return AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBody.attributeTypeMap;
    }
}
exports.AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBody = AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBody;
AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBody.discriminator = undefined;
AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBody.attributeTypeMap = [
    {
        "name": "followerDemographics",
        "baseName": "follower_demographics",
        "type": "AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics"
    },
    {
        "name": "gmvRanges",
        "baseName": "gmv_ranges",
        "type": "Array<string>"
    },
    {
        "name": "keyword",
        "baseName": "keyword",
        "type": "string"
    },
    {
        "name": "searchKey",
        "baseName": "search_key",
        "type": "string"
    },
    {
        "name": "unitsSoldRanges",
        "baseName": "units_sold_ranges",
        "type": "Array<string>"
    }
];
//# sourceMappingURL=SellerSearchCreatoronMarketplaceRequestBody.js.map