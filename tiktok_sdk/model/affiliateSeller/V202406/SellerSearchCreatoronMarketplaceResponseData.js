"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202406SellerSearchCreatoronMarketplaceResponseData = void 0;
class AffiliateSeller202406SellerSearchCreatoronMarketplaceResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202406SellerSearchCreatoronMarketplaceResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202406SellerSearchCreatoronMarketplaceResponseData = AffiliateSeller202406SellerSearchCreatoronMarketplaceResponseData;
AffiliateSeller202406SellerSearchCreatoronMarketplaceResponseData.discriminator = undefined;
AffiliateSeller202406SellerSearchCreatoronMarketplaceResponseData.attributeTypeMap = [
    {
        "name": "creators",
        "baseName": "creators",
        "type": "Array<AffiliateSeller202406SellerSearchCreatoronMarketplaceResponseDataCreators>"
    },
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "searchKey",
        "baseName": "search_key",
        "type": "string"
    }
];
//# sourceMappingURL=SellerSearchCreatoronMarketplaceResponseData.js.map