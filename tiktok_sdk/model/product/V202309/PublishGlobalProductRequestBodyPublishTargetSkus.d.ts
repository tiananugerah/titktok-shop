import { Product202309PublishGlobalProductRequestBodyPublishTargetSkusInventory } from './PublishGlobalProductRequestBodyPublishTargetSkusInventory';
import { Product202309PublishGlobalProductRequestBodyPublishTargetSkusPrice } from './PublishGlobalProductRequestBodyPublishTargetSkusPrice';
export declare class Product202309PublishGlobalProductRequestBodyPublishTargetSkus {
    'inventory'?: Product202309PublishGlobalProductRequestBodyPublishTargetSkusInventory;
    'price'?: Product202309PublishGlobalProductRequestBodyPublishTargetSkusPrice;
    'relatedGlobalSkuId'?: string;
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
//# sourceMappingURL=PublishGlobalProductRequestBodyPublishTargetSkus.d.ts.map