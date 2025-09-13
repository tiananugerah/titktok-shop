"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202501CreatorSelectAffiliateProductResponseData = void 0;
class AffiliateCreator202501CreatorSelectAffiliateProductResponseData {
    static getAttributeTypeMap() {
        return AffiliateCreator202501CreatorSelectAffiliateProductResponseData.attributeTypeMap;
    }
}
exports.AffiliateCreator202501CreatorSelectAffiliateProductResponseData = AffiliateCreator202501CreatorSelectAffiliateProductResponseData;
AffiliateCreator202501CreatorSelectAffiliateProductResponseData.discriminator = undefined;
AffiliateCreator202501CreatorSelectAffiliateProductResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<AffiliateCreator202501CreatorSelectAffiliateProductResponseDataProducts>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=CreatorSelectAffiliateProductResponseData.js.map