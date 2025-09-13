"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseData = void 0;
class AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseData {
    static getAttributeTypeMap() {
        return AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseData.attributeTypeMap;
    }
}
exports.AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseData = AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseData;
AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseData.discriminator = undefined;
AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseData.attributeTypeMap = [
    {
        "name": "nextPageToken",
        "baseName": "next_page_token",
        "type": "string"
    },
    {
        "name": "products",
        "baseName": "products",
        "type": "Array<AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProducts>"
    },
    {
        "name": "totalCount",
        "baseName": "total_count",
        "type": "number"
    }
];
//# sourceMappingURL=CreatorSearchOpenCollaborationProductResponseData.js.map