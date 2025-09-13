"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution = void 0;
class Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution {
    static getAttributeTypeMap() {
        return Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution.attributeTypeMap;
    }
}
exports.Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution = Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution;
Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution.discriminator = undefined;
Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution.attributeTypeMap = [
    {
        "name": "campaignInventory",
        "baseName": "campaign_inventory",
        "type": "Array<Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory>"
    },
    {
        "name": "creatorInventory",
        "baseName": "creator_inventory",
        "type": "Array<Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory>"
    },
    {
        "name": "inShopInventory",
        "baseName": "in_shop_inventory",
        "type": "Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory"
    }
];
//# sourceMappingURL=InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution.js.map