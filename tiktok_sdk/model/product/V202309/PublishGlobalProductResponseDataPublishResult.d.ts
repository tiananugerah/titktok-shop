import { Product202309PublishGlobalProductResponseDataPublishResultFailReasons } from './PublishGlobalProductResponseDataPublishResultFailReasons';
export declare class Product202309PublishGlobalProductResponseDataPublishResult {
    'failReasons'?: Array<Product202309PublishGlobalProductResponseDataPublishResultFailReasons>;
    'region'?: string;
    'status'?: string;
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
//# sourceMappingURL=PublishGlobalProductResponseDataPublishResult.d.ts.map