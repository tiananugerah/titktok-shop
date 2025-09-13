import { Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory } from './InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory';
import { Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory } from './InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory';
import { Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory } from './InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory';
export declare class Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution {
    'campaignInventory'?: Array<Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCampaignInventory>;
    'creatorInventory'?: Array<Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionCreatorInventory>;
    'inShopInventory'?: Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistributionInShopInventory;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
//# sourceMappingURL=InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution.d.ts.map