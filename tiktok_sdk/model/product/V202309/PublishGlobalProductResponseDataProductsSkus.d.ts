import { Product202309PublishGlobalProductResponseDataProductsSkusSaleAttributes } from './PublishGlobalProductResponseDataProductsSkusSaleAttributes';
export declare class Product202309PublishGlobalProductResponseDataProductsSkus {
    'id'?: string;
    'relatedGlobalSkuId'?: string;
    'saleAttributes'?: Array<Product202309PublishGlobalProductResponseDataProductsSkusSaleAttributes>;
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
//# sourceMappingURL=PublishGlobalProductResponseDataProductsSkus.d.ts.map