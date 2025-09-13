import { Product202309CreateGlobalProductResponseDataGlobalSkusSalesAttributes } from './CreateGlobalProductResponseDataGlobalSkusSalesAttributes';
export declare class Product202309CreateGlobalProductResponseDataGlobalSkus {
    'externalGlobalSkuId'?: string;
    'id'?: string;
    'salesAttributes'?: Array<Product202309CreateGlobalProductResponseDataGlobalSkusSalesAttributes>;
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
//# sourceMappingURL=CreateGlobalProductResponseDataGlobalSkus.d.ts.map