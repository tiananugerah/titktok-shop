"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBody = void 0;
class AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBody {
    static getAttributeTypeMap() {
        return AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBody.attributeTypeMap;
    }
}
exports.AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBody = AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBody;
AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBody.discriminator = undefined;
AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBody.attributeTypeMap = [
    {
        "name": "followerDemographics",
        "baseName": "follower_demographics",
        "type": "AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics"
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