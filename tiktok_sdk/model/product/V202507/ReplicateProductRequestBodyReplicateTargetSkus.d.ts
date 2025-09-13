import { Product202507ReplicateProductRequestBodyReplicateTargetSkusInventory } from './ReplicateProductRequestBodyReplicateTargetSkusInventory';
import { Product202507ReplicateProductRequestBodyReplicateTargetSkusPrice } from './ReplicateProductRequestBodyReplicateTargetSkusPrice';
export declare class Product202507ReplicateProductRequestBodyReplicateTargetSkus {
    'inventory'?: Array<Product202507ReplicateProductRequestBodyReplicateTargetSkusInventory>;
    'price'?: Product202507ReplicateProductRequestBodyReplicateTargetSkusPrice;
    'sourceSkuId'?: string;
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
//# sourceMappingURL=ReplicateProductRequestBodyReplicateTargetSkus.d.ts.map