import { Product202309GetProductResponseDataSkusSalesAttributesSkuImg } from './GetProductResponseDataSkusSalesAttributesSkuImg';
import { Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages } from './GetProductResponseDataSkusSalesAttributesSupplementarySkuImages';
export declare class Product202309GetProductResponseDataSkusSalesAttributes {
    'id'?: string;
    'name'?: string;
    'skuImg'?: Product202309GetProductResponseDataSkusSalesAttributesSkuImg;
    'supplementarySkuImages'?: Array<Product202309GetProductResponseDataSkusSalesAttributesSupplementarySkuImages>;
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
//# sourceMappingURL=GetProductResponseDataSkusSalesAttributes.d.ts.map