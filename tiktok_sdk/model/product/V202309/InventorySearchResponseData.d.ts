import { Product202309InventorySearchResponseDataInventory } from './InventorySearchResponseDataInventory';
export declare class Product202309InventorySearchResponseData {
    'inventory'?: Array<Product202309InventorySearchResponseDataInventory>;
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
//# sourceMappingURL=InventorySearchResponseData.d.ts.map