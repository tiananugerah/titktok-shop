import { Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution } from './InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution';
import { Product202309InventorySearchResponseDataInventorySkusWarehouseInventory } from './InventorySearchResponseDataInventorySkusWarehouseInventory';
export declare class Product202309InventorySearchResponseDataInventorySkus {
    'id'?: string;
    'sellerSku'?: string;
    'totalAvailableInventoryDistribution'?: Product202309InventorySearchResponseDataInventorySkusTotalAvailableInventoryDistribution;
    'totalAvailableQuantity'?: number;
    'totalCommittedQuantity'?: number;
    'warehouseInventory'?: Array<Product202309InventorySearchResponseDataInventorySkusWarehouseInventory>;
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
//# sourceMappingURL=InventorySearchResponseDataInventorySkus.d.ts.map