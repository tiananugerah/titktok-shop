"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics = void 0;
class AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics {
    static getAttributeTypeMap() {
        return AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics.attributeTypeMap;
    }
}
exports.AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics = AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics;
AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics.discriminator = undefined;
AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics.attributeTypeMap = [
    {
        "name": "ageRanges",
        "baseName": "age_ranges",
        "type": "Array<string>"
    },
    {
        "name": "countRange",
        "baseName": "count_range",
        "type": "AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographicsCountRange"
    },
    {
        "name": "genderDistribution",
        "baseName": "gender_distribution",
        "type": "AffiliateSeller202406SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographicsGenderDistribution"
    }
];
//# sourceMappingURL=SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics.js.map