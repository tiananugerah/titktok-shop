"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202405CreateTargetCollaborationRequestBody = void 0;
class AffiliateSeller202405CreateTargetCollaborationRequestBody {
    static getAttributeTypeMap() {
        return AffiliateSeller202405CreateTargetCollaborationRequestBody.attributeTypeMap;
    }
}
exports.AffiliateSeller202405CreateTargetCollaborationRequestBody = AffiliateSeller202405CreateTargetCollaborationRequestBody;
AffiliateSeller202405CreateTargetCollaborationRequestBody.discriminator = undefined;
AffiliateSeller202405CreateTargetCollaborationRequestBody.attributeTypeMap = [
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
        "type": "AffiliateSeller202405CreateTargetCollaborationRequestBodyFreeSampleRule"
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
        "name": "products",
        "baseName": "products",
        "type": "Array<AffiliateSeller202405CreateTargetCollaborationRequestBodyProducts>"
    },
    {
        "name": "sellerContactInfo",
        "baseName": "seller_contact_info",
        "type": "AffiliateSeller202405CreateTargetCollaborationRequestBodySellerContactInfo"
    }
];
//# sourceMappingURL=CreateTargetCollaborationRequestBody.js.map