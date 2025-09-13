"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts = void 0;
class AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts {
    static getAttributeTypeMap() {
        return AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts.attributeTypeMap;
    }
}
exports.AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts = AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts;
AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts.discriminator = undefined;
AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts.attributeTypeMap = [
    {
        "name": "collaborationStatus",
        "baseName": "collaboration_status",
        "type": "string"
    },
    {
        "name": "commission",
        "baseName": "commission",
        "type": "AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsCommission"
    },
    {
        "name": "commissionEffectiveStatus",
        "baseName": "commission_effective_status",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "mainImageUrl",
        "baseName": "main_image_url",
        "type": "string"
    },
    {
        "name": "originalPrice",
        "baseName": "original_price",
        "type": "AffiliateSeller202409QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsOriginalPrice"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
//# sourceMappingURL=QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts.js.map