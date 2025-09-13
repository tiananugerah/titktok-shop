"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202505SellerSearchCreatoronMarketplaceResponse = void 0;
class AffiliateSeller202505SellerSearchCreatoronMarketplaceResponse {
    static getAttributeTypeMap() {
        return AffiliateSeller202505SellerSearchCreatoronMarketplaceResponse.attributeTypeMap;
    }
}
exports.AffiliateSeller202505SellerSearchCreatoronMarketplaceResponse = AffiliateSeller202505SellerSearchCreatoronMarketplaceResponse;
AffiliateSeller202505SellerSearchCreatoronMarketplaceResponse.discriminator = undefined;
AffiliateSeller202505SellerSearchCreatoronMarketplaceResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "AffiliateSeller202505SellerSearchCreatoronMarketplaceResponseData"
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