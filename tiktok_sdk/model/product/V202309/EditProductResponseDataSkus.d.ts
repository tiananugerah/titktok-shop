import { Product202309EditProductResponseDataSkusSalesAttributes } from './EditProductResponseDataSkusSalesAttributes';
export declare class Product202309EditProductResponseDataSkus {
    'externalSkuId'?: string;
    'id'?: string;
    'salesAttributes'?: Array<Product202309EditProductResponseDataSkusSalesAttributes>;
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
//# sourceMappingURL=EditProductResponseDataSkus.d.ts.map