"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts = void 0;
class AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts {
    static getAttributeTypeMap() {
        return AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts.attributeTypeMap;
    }
}
exports.AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts = AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts;
AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts.discriminator = undefined;
AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProducts.attributeTypeMap = [
    {
        "name": "collaborationStatus",
        "baseName": "collaboration_status",
        "type": "string"
    },
    {
        "name": "commission",
        "baseName": "commission",
        "type": "AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsCommission"
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
        "type": "AffiliateSeller202412QueryTargetCollaborationDetailResponseDataTargetCollaborationProductsOriginalPrice"
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