import { Product202309SearchProductsResponseDataProductsSkusInventory } from './SearchProductsResponseDataProductsSkusInventory';
import { Product202309SearchProductsResponseDataProductsSkusPrice } from './SearchProductsResponseDataProductsSkusPrice';
export declare class Product202309SearchProductsResponseDataProductsSkus {
    'id'?: string;
    'inventory'?: Array<Product202309SearchProductsResponseDataProductsSkusInventory>;
    'price'?: Product202309SearchProductsResponseDataProductsSkusPrice;
    'sellerSku'?: string;
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
//# sourceMappingURL=SearchProductsResponseDataProductsSkus.d.ts.map