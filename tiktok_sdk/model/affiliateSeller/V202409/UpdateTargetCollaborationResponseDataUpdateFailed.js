"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailed = void 0;
class AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailed {
    static getAttributeTypeMap() {
        return AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailed.attributeTypeMap;
    }
}
exports.AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailed = AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailed;
AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailed.discriminator = undefined;
AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailed.attributeTypeMap = [
    {
        "name": "addCreatorIds",
        "baseName": "add_creator_ids",
        "type": "Array<string>"
    },
    {
        "name": "addProducts",
        "baseName": "add_products",
        "type": "AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedAddProducts"
    },
    {
        "name": "changeCommissions",
        "baseName": "change_commissions",
        "type": "AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedChangeCommissions"
    },
    {
        "name": "endTime",
        "baseName": "end_time",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "removeCreatorIds",
        "baseName": "remove_creator_ids",
        "type": "Array<string>"
    },
    {
        "name": "removeProductIds",
        "baseName": "remove_product_ids",
        "type": "Array<string>"
    },
    {
        "name": "sellerContactInfo",
        "baseName": "seller_contact_info",
        "type": "AffiliateSeller202409UpdateTargetCollaborationResponseDataUpdateFailedSellerContactInfo"
    }
];
//# sourceMappingURL=UpdateTargetCollaborationResponseDataUpdateFailed.js.map