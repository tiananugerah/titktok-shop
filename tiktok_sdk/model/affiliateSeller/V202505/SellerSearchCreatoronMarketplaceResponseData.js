"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202505SellerSearchCreatoronMarketplaceResponseData = void 0;
class AffiliateSeller202505SellerSearchCreatoronMarketplaceResponseData {
    static getAttributeTypeMap() {
        return AffiliateSeller202505SellerSearchCreatoronMarketplaceResponseData.attributeTypeMap;
    }
}
exports.AffiliateSeller202505SellerSearchCreatoronMarketplaceResponseData = AffiliateSeller202505SellerSearchCreatoronMarketplaceResponseData;
AffiliateSeller202505SellerSearchCreatoronMarketplaceResponseData.discriminator = undefined;
AffiliateSeller202505SellerSearchCreatoronMarketplaceResponseData.attributeTypeMap = [
    {
        "name": "creators",
        "baseName": "creators",
        "type": "Array<AffiliateSeller202505SellerSearchCreatoronMarketplaceResponseDataCreators>"
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