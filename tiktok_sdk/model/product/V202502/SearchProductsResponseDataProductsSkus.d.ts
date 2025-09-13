import { Product202502SearchProductsResponseDataProductsSkusExternalListPrices } from './SearchProductsResponseDataProductsSkusExternalListPrices';
import { Product202502SearchProductsResponseDataProductsSkusInventory } from './SearchProductsResponseDataProductsSkusInventory';
import { Product202502SearchProductsResponseDataProductsSkusListPrice } from './SearchProductsResponseDataProductsSkusListPrice';
import { Product202502SearchProductsResponseDataProductsSkusPreSale } from './SearchProductsResponseDataProductsSkusPreSale';
import { Product202502SearchProductsResponseDataProductsSkusPrice } from './SearchProductsResponseDataProductsSkusPrice';
import { Product202502SearchProductsResponseDataProductsSkusStatusInfo } from './SearchProductsResponseDataProductsSkusStatusInfo';
export declare class Product202502SearchProductsResponseDataProductsSkus {
    'externalListPrices'?: Array<Product202502SearchProductsResponseDataProductsSkusExternalListPrices>;
    'id'?: string;
    'inventory'?: Array<Product202502SearchProductsResponseDataProductsSkusInventory>;
    'listPrice'?: Product202502SearchProductsResponseDataProductsSkusListPrice;
    'preSale'?: Product202502SearchProductsResponseDataProductsSkusPreSale;
    'price'?: Product202502SearchProductsResponseDataProductsSkusPrice;
    'sellerSku'?: string;
    'statusInfo'?: Product202502SearchProductsResponseDataProductsSkusStatusInfo;
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