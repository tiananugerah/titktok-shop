"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProducts = void 0;
class AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProducts {
    static getAttributeTypeMap() {
        return AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProducts.attributeTypeMap;
    }
}
exports.AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProducts = AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProducts;
AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProducts.discriminator = undefined;
AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProducts.attributeTypeMap = [
    {
        "name": "categoryChains",
        "baseName": "category_chains",
        "type": "Array<AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsCategoryChains>"
    },
    {
        "name": "commission",
        "baseName": "commission",
        "type": "AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsCommission"
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
        "type": "AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsOriginalPrice"
    },
    {
        "name": "saleRegion",
        "baseName": "sale_region",
        "type": "string"
    },
    {
        "name": "salesPrice",
        "baseName": "sales_price",
        "type": "AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsSalesPrice"
    },
    {
        "name": "shop",
        "baseName": "shop",
        "type": "AffiliateSeller202405SellerSearchAffiliateOpenCollaborationProductResponseDataProductsShop"
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
//# sourceMappingURL=SellerSearchAffiliateOpenCollaborationProductResponseDataProducts.js.map