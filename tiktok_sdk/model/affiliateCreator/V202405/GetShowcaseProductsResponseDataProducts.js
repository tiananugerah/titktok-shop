"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405GetShowcaseProductsResponseDataProducts = void 0;
class AffiliateCreator202405GetShowcaseProductsResponseDataProducts {
    static getAttributeTypeMap() {
        return AffiliateCreator202405GetShowcaseProductsResponseDataProducts.attributeTypeMap;
    }
}
exports.AffiliateCreator202405GetShowcaseProductsResponseDataProducts = AffiliateCreator202405GetShowcaseProductsResponseDataProducts;
AffiliateCreator202405GetShowcaseProductsResponseDataProducts.discriminator = undefined;
AffiliateCreator202405GetShowcaseProductsResponseDataProducts.attributeTypeMap = [
    {
        "name": "addition",
        "baseName": "addition",
        "type": "AffiliateCreator202405GetShowcaseProductsResponseDataProductsAddition"
    },
    {
        "name": "collaboration",
        "baseName": "collaboration",
        "type": "AffiliateCreator202405GetShowcaseProductsResponseDataProductsCollaboration"
    },
    {
        "name": "commission",
        "baseName": "commission",
        "type": "AffiliateCreator202405GetShowcaseProductsResponseDataProductsCommission"
    },
    {
        "name": "detailLink",
        "baseName": "detail_link",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "mainImages",
        "baseName": "main_images",
        "type": "Array<AffiliateCreator202405GetShowcaseProductsResponseDataProductsMainImages>"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "AffiliateCreator202405GetShowcaseProductsResponseDataProductsPrice"
    },
    {
        "name": "saleRegions",
        "baseName": "sale_regions",
        "type": "Array<string>"
    },
    {
        "name": "shop",
        "baseName": "shop",
        "type": "AffiliateCreator202405GetShowcaseProductsResponseDataProductsShop"
    },
    {
        "name": "source",
        "baseName": "source",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "AffiliateCreator202405GetShowcaseProductsResponseDataProductsStatus"
    },
    {
        "name": "thirdPartyLink",
        "baseName": "third_party_link",
        "type": "string"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    }
];
//# sourceMappingURL=GetShowcaseProductsResponseDataProducts.js.map