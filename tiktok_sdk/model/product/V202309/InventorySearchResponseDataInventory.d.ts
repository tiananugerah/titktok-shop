import { Product202309InventorySearchResponseDataInventorySkus } from './InventorySearchResponseDataInventorySkus';
export declare class Product202309InventorySearchResponseDataInventory {
    'productId'?: string;
    'skus'?: Array<Product202309InventorySearchResponseDataInventorySkus>;
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
//# sourceMappingURL=InventorySearchResponseDataInventory.d.ts.map