import { Product202309PublishGlobalProductRequestBodyPublishTargetSkus } from './PublishGlobalProductRequestBodyPublishTargetSkus';
export declare class Product202309PublishGlobalProductRequestBodyPublishTarget {
    'manufacturerIds'?: Array<string>;
    'region'?: string;
    'responsiblePersonIds'?: Array<string>;
    'skus'?: Array<Product202309PublishGlobalProductRequestBodyPublishTargetSkus>;
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
//# sourceMappingURL=PublishGlobalProductRequestBodyPublishTarget.d.ts.map