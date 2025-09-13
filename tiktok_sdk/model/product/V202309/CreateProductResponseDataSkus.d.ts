import { Product202309CreateProductResponseDataSkusSalesAttributes } from './CreateProductResponseDataSkusSalesAttributes';
export declare class Product202309CreateProductResponseDataSkus {
    'externalSkuId'?: string;
    'id'?: string;
    'salesAttributes'?: Array<Product202309CreateProductResponseDataSkusSalesAttributes>;
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
//# sourceMappingURL=CreateProductResponseDataSkus.d.ts.map