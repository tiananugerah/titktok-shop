"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405GetShowcaseProductsResponseData = void 0;
class AffiliateCreator202405GetShowcaseProductsResponseData {
    static getAttributeTypeMap() {
        return AffiliateCreator202405GetShowcaseProductsResponseData.attributeTypeMap;
    }
}
exports.AffiliateCreator202405GetShowcaseProductsResponseData = AffiliateCreator202405GetShowcaseProductsResponseData;
AffiliateCreator202405GetShowcaseProductsResponseData.discriminator = undefined;
AffiliateCreator202405GetShowcaseProductsResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<AffiliateCreator202405GetShowcaseProductsResponseDataProducts>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=GetShowcaseProductsResponseData.js.map