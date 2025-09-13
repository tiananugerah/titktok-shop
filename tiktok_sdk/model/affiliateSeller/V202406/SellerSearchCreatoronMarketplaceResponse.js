"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202406SellerSearchCreatoronMarketplaceResponse = void 0;
class AffiliateSeller202406SellerSearchCreatoronMarketplaceResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202406SellerSearchCreatoronMarketplaceResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202406SellerSearchCreatoronMarketplaceResponse = AffiliateSeller202406SellerSearchCreatoronMarketplaceResponse;
AffiliateSeller202406SellerSearchCreatoronMarketplaceResponse.discriminator = undefined;
AffiliateSeller202406SellerSearchCreatoronMarketplaceResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202406SellerSearchCreatoronMarketplaceResponseData"
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
//# sourceMappingURL=SellerSearchCreatoronMarketplaceResponse.js.map