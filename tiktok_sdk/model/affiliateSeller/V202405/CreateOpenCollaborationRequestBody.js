"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202405CreateOpenCollaborationRequestBody = void 0;
class AffiliateSeller202405CreateOpenCollaborationRequestBody {
    static getAttributeTypeMap() {
        return AffiliateSeller202405CreateOpenCollaborationRequestBody.attributeTypeMap;
    }
}
exports.AffiliateSeller202405CreateOpenCollaborationRequestBody = AffiliateSeller202405CreateOpenCollaborationRequestBody;
AffiliateSeller202405CreateOpenCollaborationRequestBody.discriminator = undefined;
AffiliateSeller202405CreateOpenCollaborationRequestBody.attributeTypeMap = [
    {
        "name": "commissionRate",
        "baseName": "commission_rate",
        "type": "number"
    },
    {
        "name": "productId",
        "baseName": "product_id",
        "type": "string"
    },
    {
        "name": "requireSellerApproveCreator",
        "baseName": "require_seller_approve_creator",
        "type": "boolean"
    }
];
//# sourceMappingURL=CreateOpenCollaborationRequestBody.js.map