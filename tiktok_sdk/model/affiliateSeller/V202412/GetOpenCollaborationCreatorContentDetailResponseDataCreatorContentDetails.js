"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseDataCreatorContentDetails = void 0;
class AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseDataCreatorContentDetails {
    static getAttributeTypeMap() {
        return AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseDataCreatorContentDetails.attributeTypeMap;
    }
}
exports.AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseDataCreatorContentDetails = AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseDataCreatorContentDetails;
AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseDataCreatorContentDetails.discriminator = undefined;
AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseDataCreatorContentDetails.attributeTypeMap = [
    {
        "name": "creatorProfile",
        "baseName": "creator_profile",
        "type": "AffiliateSeller202412GetOpenCollaborationCreatorContentDetailResponseDataCreatorContentDetailsCreatorProfile"
    },
    {
        "name": "liveCount",
        "baseName": "live_count",
        "type": "number"
    },
    {
        "name": "promotionEndTime",
        "baseName": "promotion_end_time",
        "type": "number"
    },
    {
        "name": "promotionStatus",
        "baseName": "promotion_status",
        "type": "string"
    },
    {
        "name": "videoCount",
        "baseName": "video_count",
        "type": "number"
    }
];
//# sourceMappingURL=GetOpenCollaborationCreatorContentDetailResponseDataCreatorContentDetails.js.map