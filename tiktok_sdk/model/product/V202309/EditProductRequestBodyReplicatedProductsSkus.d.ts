import { Product202309EditProductRequestBodyReplicatedProductsSkusInventory } from './EditProductRequestBodyReplicatedProductsSkusInventory';
import { Product202309EditProductRequestBodyReplicatedProductsSkusPrice } from './EditProductRequestBodyReplicatedProductsSkusPrice';
export declare class Product202309EditProductRequestBodyReplicatedProductsSkus {
    'id'?: string;
    'inventory'?: Array<Product202309EditProductRequestBodyReplicatedProductsSkusInventory>;
    'price'?: Product202309EditProductRequestBodyReplicatedProductsSkusPrice;
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
//# sourceMappingURL=EditProductRequestBodyReplicatedProductsSkus.d.ts.map