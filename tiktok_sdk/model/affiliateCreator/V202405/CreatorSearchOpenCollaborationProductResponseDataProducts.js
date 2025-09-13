"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProducts = void 0;
class AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProducts {
    static getAttributeTypeMap() {
        return AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProducts.attributeTypeMap;
    }
}
exports.AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProducts = AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProducts;
AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProducts.discriminator = undefined;
AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProducts.attributeTypeMap = [
    {
        "name": "categoryChains",
        "baseName": "category_chains",
        "type": "Array<AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsCategoryChains>"
    },
    {
        "name": "commission",
        "baseName": "commission",
        "type": "AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsCommission"
    },
    {
        "name": "detailLink",
        "baseName": "detail_link",
        "type": "string"
    },
    {
        "name": "hasInventory",
        "baseName": "has_inventory",
        "type": "boolean"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "mainImageUrl",
        "baseName": "main_image_url",
        "type": "string"
    },
    {
        "name": "originalPrice",
        "baseName": "original_price",
        "type": "AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsOriginalPrice"
    },
    {
        "name": "saleRegion",
        "baseName": "sale_region",
        "type": "string"
    },
    {
        "name": "salesPrice",
        "baseName": "sales_price",
        "type": "AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsSalesPrice"
    },
    {
        "name": "shop",
        "baseName": "shop",
        "type": "AffiliateCreator202405CreatorSearchOpenCollaborationProductResponseDataProductsShop"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "unitsSold",
        "baseName": "units_sold",
        "type": "number"
    }
];
//# sourceMappingURL=CreatorSearchOpenCollaborationProductResponseDataProducts.js.map