import { Product202309PartialEditProductResponseDataSkusSalesAttributes } from './PartialEditProductResponseDataSkusSalesAttributes';
export declare class Product202309PartialEditProductResponseDataSkus {
    'externalSkuId'?: string;
    'id'?: string;
    'salesAttributes'?: Array<Product202309PartialEditProductResponseDataSkusSalesAttributes>;
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
//# sourceMappingURL=PartialEditProductResponseDataSkus.d.ts.map