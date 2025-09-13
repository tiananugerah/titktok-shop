import { Product202309PartialEditProductRequestBodyReplicatedProductsSkusInventory } from './PartialEditProductRequestBodyReplicatedProductsSkusInventory';
import { Product202309PartialEditProductRequestBodyReplicatedProductsSkusPrice } from './PartialEditProductRequestBodyReplicatedProductsSkusPrice';
export declare class Product202309PartialEditProductRequestBodyReplicatedProductsSkus {
    'id'?: string;
    'inventory'?: Array<Product202309PartialEditProductRequestBodyReplicatedProductsSkusInventory>;
    'price'?: Product202309PartialEditProductRequestBodyReplicatedProductsSkusPrice;
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
//# sourceMappingURL=PartialEditProductRequestBodyReplicatedProductsSkus.d.ts.map