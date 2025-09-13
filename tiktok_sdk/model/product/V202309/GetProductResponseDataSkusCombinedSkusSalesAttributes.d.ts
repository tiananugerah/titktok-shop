import { Product202309GetProductResponseDataSkusCombinedSkusSalesAttributesSkuImg } from './GetProductResponseDataSkusCombinedSkusSalesAttributesSkuImg';
import { Product202309GetProductResponseDataSkusCombinedSkusSalesAttributesSupplementarySkuImages } from './GetProductResponseDataSkusCombinedSkusSalesAttributesSupplementarySkuImages';
export declare class Product202309GetProductResponseDataSkusCombinedSkusSalesAttributes {
    'id'?: string;
    'name'?: string;
    'skuImg'?: Product202309GetProductResponseDataSkusCombinedSkusSalesAttributesSkuImg;
    'supplementarySkuImages'?: Array<Product202309GetProductResponseDataSkusCombinedSkusSalesAttributesSupplementarySkuImages>;
    'valueId'?: string;
    'valueName'?: string;
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
//# sourceMappingURL=GetProductResponseDataSkusCombinedSkusSalesAttributes.d.ts.map