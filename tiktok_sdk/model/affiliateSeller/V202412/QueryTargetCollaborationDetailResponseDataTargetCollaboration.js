"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaboration = void 0;
class AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaboration {
    static getAttributeTypeMap() {
        return AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaboration.attributeTypeMap;
    }
}
exports.AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaboration = AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaboration;
AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaboration.discriminator = undefined;
AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaboration.attributeTypeMap = [
    {
        "name": "contentCreatorCount",
        "baseName": "content_creator_count",
        "type": "number"
    },
    {
        "name": "creatorInvitedCount",
        "baseName": "creator_invited_count",
        "type": "number"
    },
    {
        "name": "creators",
        "baseName": "creators",
        "type": "Array<AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationCreators>"
    },
    {
        "name": "endTime",
        "baseName": "end_time",
        "type": "number"
    },
    {
        "name": "freeSampleRule",
        "baseName": "free_sample_rule",
        "type": "AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationFreeSampleRule"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "productCount",
        "baseName": "product_count",
        "type": "number"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts>"
    },
    {
        "name": "sellerContactInfo",
        "baseName": "seller_contact_info",
        "type": "AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationSellerContactInfo"
    },
    {
        "name": "showcaseCreatorCount",
        "baseName": "showcase_creator_count",
        "type": "number"
    },
    {
        "name": "startTime",
        "baseName": "start_time",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "updateTime",
        "baseName": "update_time",
        "type": "number"
    }
];
//# sourceMappingURL=QueryTargetCollaborationDetailResponseDataTargetCollaboration.js.map