import { Product202312SearchProductsResponseDataProductsSkusExternalListPrices } from './SearchProductsResponseDataProductsSkusExternalListPrices';
import { Product202312SearchProductsResponseDataProductsSkusInventory } from './SearchProductsResponseDataProductsSkusInventory';
import { Product202312SearchProductsResponseDataProductsSkusListPrice } from './SearchProductsResponseDataProductsSkusListPrice';
import { Product202312SearchProductsResponseDataProductsSkusPrice } from './SearchProductsResponseDataProductsSkusPrice';
export declare class Product202312SearchProductsResponseDataProductsSkus {
    'externalListPrices'?: Array<Product202312SearchProductsResponseDataProductsSkusExternalListPrices>;
    'id'?: string;
    'inventory'?: Array<Product202312SearchProductsResponseDataProductsSkusInventory>;
    'listPrice'?: Product202312SearchProductsResponseDataProductsSkusListPrice;
    'price'?: Product202312SearchProductsResponseDataProductsSkusPrice;
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