import { Product202309PublishGlobalProductResponseDataProducts } from './PublishGlobalProductResponseDataProducts';
import { Product202309PublishGlobalProductResponseDataPublishResult } from './PublishGlobalProductResponseDataPublishResult';
export declare class Product202309PublishGlobalProductResponseData {
    'products'?: Array<Product202309PublishGlobalProductResponseDataProducts>;
    'publishResult'?: Array<Product202309PublishGlobalProductResponseDataPublishResult>;
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
//# sourceMappingURL=PublishGlobalProductResponseData.d.ts.map