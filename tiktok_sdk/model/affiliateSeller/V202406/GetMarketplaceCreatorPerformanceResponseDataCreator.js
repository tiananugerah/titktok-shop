"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreator = void 0;
class AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreator {
    static getAttributeTypeMap() {
        return AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreator.attributeTypeMap;
    }
}
exports.AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreator = AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreator;
AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreator.discriminator = undefined;
AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreator.attributeTypeMap = [
    {
        "name": "avatar",
        "baseName": "avatar",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorAvatar"
    },
    {
        "name": "avgCommissionRate",
        "baseName": "avg_commission_rate",
        "type": "number"
    },
    {
        "name": "avgCommissionRateRange",
        "baseName": "avg_commission_rate_range",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorAvgCommissionRateRange"
    },
    {
        "name": "avgEcLiveCommentCount",
        "baseName": "avg_ec_live_comment_count",
        "type": "number"
    },
    {
        "name": "avgEcLiveLikeCount",
        "baseName": "avg_ec_live_like_count",
        "type": "number"
    },
    {
        "name": "avgEcLiveShareCount",
        "baseName": "avg_ec_live_share_count",
        "type": "number"
    },
    {
        "name": "avgEcLiveViewCount",
        "baseName": "avg_ec_live_view_count",
        "type": "number"
    },
    {
        "name": "avgEcVideoCommentCount",
        "baseName": "avg_ec_video_comment_count",
        "type": "number"
    },
    {
        "name": "avgEcVideoLikeCount",
        "baseName": "avg_ec_video_like_count",
        "type": "number"
    },
    {
        "name": "avgEcVideoPlayCount",
        "baseName": "avg_ec_video_play_count",
        "type": "number"
    },
    {
        "name": "avgEcVideoShareCount",
        "baseName": "avg_ec_video_share_count",
        "type": "number"
    },
    {
        "name": "avgGmvPerBuyer",
        "baseName": "avg_gmv_per_buyer",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorAvgGmvPerBuyer"
    },
    {
        "name": "avgGmvPerBuyerRange",
        "baseName": "avg_gmv_per_buyer_range",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorAvgGmvPerBuyerRange"
    },
    {
        "name": "bioDescription",
        "baseName": "bio_description",
        "type": "string"
    },
    {
        "name": "brandCollaborationCount",
        "baseName": "brand_collaboration_count",
        "type": "number"
    },
    {
        "name": "categoryGmvDistribution",
        "baseName": "category_gmv_distribution",
        "type": "Array<AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorCategoryGmvDistribution>"
    },
    {
        "name": "categoryIds",
        "baseName": "category_ids",
        "type": "Array<string>"
    },
    {
        "name": "contentGmvDistribution",
        "baseName": "content_gmv_distribution",
        "type": "Array<AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorContentGmvDistribution>"
    },
    {
        "name": "ecLiveCount",
        "baseName": "ec_live_count",
        "type": "number"
    },
    {
        "name": "ecLiveEngagementRate",
        "baseName": "ec_live_engagement_rate",
        "type": "string"
    },
    {
        "name": "ecVideoCount",
        "baseName": "ec_video_count",
        "type": "number"
    },
    {
        "name": "followerCount",
        "baseName": "follower_count",
        "type": "number"
    },
    {
        "name": "gmv",
        "baseName": "gmv",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorGmv"
    },
    {
        "name": "gmvRange",
        "baseName": "gmv_range",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorGmvRange"
    },
    {
        "name": "gpm",
        "baseName": "gpm",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorGpm"
    },
    {
        "name": "gpmRange",
        "baseName": "gpm_range",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorGpmRange"
    },
    {
        "name": "liveGmv",
        "baseName": "live_gmv",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorLiveGmv"
    },
    {
        "name": "liveGpm",
        "baseName": "live_gpm",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorLiveGpm"
    },
    {
        "name": "liveGpmRange",
        "baseName": "live_gpm_range",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorLiveGpmRange"
    },
    {
        "name": "nickname",
        "baseName": "nickname",
        "type": "string"
    },
    {
        "name": "productOriginalPriceRange",
        "baseName": "product_original_price_range",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorProductOriginalPriceRange"
    },
    {
        "name": "profileTtUri",
        "baseName": "profile_tt_uri",
        "type": "string"
    },
    {
        "name": "promotedProductNum",
        "baseName": "promoted_product_num",
        "type": "number"
    },
    {
        "name": "selectionRegion",
        "baseName": "selection_region",
        "type": "string"
    },
    {
        "name": "topCollaboratedBrandIds",
        "baseName": "top_collaborated_brand_ids",
        "type": "Array<string>"
    },
    {
        "name": "unitsSold",
        "baseName": "units_sold",
        "type": "number"
    },
    {
        "name": "unitsSoldRange",
        "baseName": "units_sold_range",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorUnitsSoldRange"
    },
    {
        "name": "username",
        "baseName": "username",
        "type": "string"
    },
    {
        "name": "videoGmv",
        "baseName": "video_gmv",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorVideoGmv"
    },
    {
        "name": "videoGpm",
        "baseName": "video_gpm",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorVideoGpm"
    },
    {
        "name": "videoGpmRange",
        "baseName": "video_gpm_range",
        "type": "AffiliateSeller202406GetMarketplaceCreatorPerformanceResponseDataCreatorVideoGpmRange"
    }
];
//# sourceMappingURL=GetMarketplaceCreatorPerformanceResponseDataCreator.js.map