"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409UpdateTargetCollaborationRequestBody = void 0;
class AffiliateSeller202409UpdateTargetCollaborationRequestBody {
    static getAttributeTypeMap() {
        return AffiliateSeller202409UpdateTargetCollaborationRequestBody.attributeTypeMap;
    }
}
exports.AffiliateSeller202409UpdateTargetCollaborationRequestBody = AffiliateSeller202409UpdateTargetCollaborationRequestBody;
AffiliateSeller202409UpdateTargetCollaborationRequestBody.discriminator = undefined;
AffiliateSeller202409UpdateTargetCollaborationRequestBody.attributeTypeMap = [
    {
        "name": "creatorUserIds",
        "baseName": "creator_user_ids",
        "type": "Array<string>"
    },
    {
        "name": "endTime",
        "baseName": "end_time",
        "type": "string"
    },
    {
        "name": "freeSampleRule",
        "baseName": "free_sample_rule",
        "type": "AffiliateSeller202409UpdateTargetCollaborationRequestBodyFreeSampleRule"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<AffiliateSeller202409UpdateTargetCollaborationRequestBodyProducts>"
    },
    {
        "name": "sellerContactInfo",
        "baseName": "seller_contact_info",
        "type": "AffiliateSeller202409UpdateTargetCollaborationRequestBodySellerContactInfo"
    }
];
//# sourceMappingURL=UpdateTargetCollaborationRequestBody.js.map