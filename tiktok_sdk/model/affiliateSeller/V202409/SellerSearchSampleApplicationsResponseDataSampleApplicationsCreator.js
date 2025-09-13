"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplicationsCreator = void 0;
class AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplicationsCreator {
    static getAttributeTypeMap() {
        return AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplicationsCreator.attributeTypeMap;
    }
}
exports.AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplicationsCreator = AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplicationsCreator;
AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplicationsCreator.discriminator = undefined;
AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplicationsCreator.attributeTypeMap = [
    {
        "name": "avatarUrl",
        "baseName": "avatar_url",
        "type": "string"
    },
    {
        "name": "contentCount",
        "baseName": "content_count",
        "type": "number"
    },
    {
        "name": "ecVideoView",
        "baseName": "ec_video_view",
        "type": "number"
    },
    {
        "name": "followerCount",
        "baseName": "follower_count",
        "type": "number"
    },
    {
        "name": "fulfillmentPercentage",
        "baseName": "fulfillment_percentage",
        "type": "string"
    },
    {
        "name": "gmv",
        "baseName": "gmv",
        "type": "AffiliateSeller202409SellerSearchSampleApplicationsResponseDataSampleApplicationsCreatorGmv"
    },
    {
        "name": "nickname",
        "baseName": "nickname",
        "type": "string"
    },
    {
        "name": "userId",
        "baseName": "user_id",
        "type": "string"
    },
    {
        "name": "username",
        "baseName": "username",
        "type": "string"
    }
];
//# sourceMappingURL=SellerSearchSampleApplicationsResponseDataSampleApplicationsCreator.js.map