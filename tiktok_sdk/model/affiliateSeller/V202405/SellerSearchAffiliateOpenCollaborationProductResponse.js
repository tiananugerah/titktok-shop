"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponse = void 0;
class AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponse = AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponse;
AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponse.discriminator = undefined;
AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseData"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
//# sourceMappingURL=SellerSearchAffiliateOpenCollaborationProductResponse.js.map