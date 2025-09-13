import { Product202507ReplicateProductRequestBodyReplicateTargetSkus } from './ReplicateProductRequestBodyReplicateTargetSkus';
export declare class Product202507ReplicateProductRequestBodyReplicateTarget {
    'region'?: string;
    'skus'?: Array<Product202507ReplicateProductRequestBodyReplicateTargetSkus>;
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
//# sourceMappingURL=ReplicateProductRequestBodyReplicateTarget.d.ts.map