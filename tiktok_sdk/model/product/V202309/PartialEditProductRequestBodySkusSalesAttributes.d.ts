import { Product202309PartialEditProductRequestBodySkusSalesAttributesSkuImg } from './PartialEditProductRequestBodySkusSalesAttributesSkuImg';
import { Product202309PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages } from './PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages';
export declare class Product202309PartialEditProductRequestBodySkusSalesAttributes {
    'id'?: string;
    'name'?: string;
    'skuImg'?: Product202309PartialEditProductRequestBodySkusSalesAttributesSkuImg;
    'supplementarySkuImages'?: Array<Product202309PartialEditProductRequestBodySkusSalesAttributesSupplementarySkuImages>;
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
//# sourceMappingURL=PartialEditProductRequestBodySkusSalesAttributes.d.ts.map