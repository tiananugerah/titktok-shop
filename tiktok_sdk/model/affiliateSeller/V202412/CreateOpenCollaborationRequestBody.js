"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202412CreateOpenCollaborationRequestBody = void 0;
class AffiliateSeller202412CreateOpenCollaborationRequestBody {
    static getAttributeTypeMap() {
        return AffiliateSeller202412CreateOpenCollaborationRequestBody.attributeTypeMap;
    }
}
exports.AffiliateSeller202412CreateOpenCollaborationRequestBody = AffiliateSeller202412CreateOpenCollaborationRequestBody;
AffiliateSeller202412CreateOpenCollaborationRequestBody.discriminator = undefined;
AffiliateSeller202412CreateOpenCollaborationRequestBody.attributeTypeMap = [
    {
        "name": "commissionRate",
        "baseName": "commission_rate",
        "type": "number"
    },
    {
        "name": "productId",
        "baseName": "product_id",
        "type": "string"
    }
];
//# sourceMappingURL=CreateOpenCollaborationRequestBody.js.map