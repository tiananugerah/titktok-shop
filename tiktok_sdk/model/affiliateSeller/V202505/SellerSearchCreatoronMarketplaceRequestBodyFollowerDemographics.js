"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics = void 0;
class AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics {
    static getAttributeTypeMap() {
        return AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics.attributeTypeMap;
    }
}
exports.AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics = AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics;
AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics.discriminator = undefined;
AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics.attributeTypeMap = [
    {
        "name": "ageRanges",
        "baseName": "age_ranges",
        "type": "Array<string>"
    },
    {
        "name": "countRange",
        "baseName": "count_range",
        "type": "AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographicsCountRange"
    },
    {
        "name": "genderDistribution",
        "baseName": "gender_distribution",
        "type": "AffiliateSeller202505SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographicsGenderDistribution"
    }
];
//# sourceMappingURL=SellerSearchCreatoronMarketplaceRequestBodyFollowerDemographics.js.map