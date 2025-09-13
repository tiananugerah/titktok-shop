"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborations = void 0;
class AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborations {
    static getAttributeTypeMap() {
        return AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborations.attributeTypeMap;
    }
}
exports.AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborations = AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborations;
AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborations.discriminator = undefined;
AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborations.attributeTypeMap = [
    {
        "name": "contentCreatorCount",
        "baseName": "content_creator_count",
        "type": "number"
    },
    {
        "name": "currentCommission",
        "baseName": "current_commission",
        "type": "AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborationsCurrentCommission"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "product",
        "baseName": "product",
        "type": "AffiliateSeller202409SearchOpenCollaborationResponseDataOpenCollaborationsProduct"
    },
    {
        "name": "requireSellerApproveCreator",
        "baseName": "require_seller_approve_creator",
        "type": "boolean"
    },
    {
        "name": "showcaseCreatorCount",
        "baseName": "showcase_creator_count",
        "type": "number"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    }
];
//# sourceMappingURL=SearchOpenCollaborationResponseDataOpenCollaborations.js.map