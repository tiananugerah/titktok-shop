import { Product202309EditProductRequestBodySkusSalesAttributesSkuImg } from './EditProductRequestBodySkusSalesAttributesSkuImg';
import { Product202309EditProductRequestBodySkusSalesAttributesSupplementarySkuImages } from './EditProductRequestBodySkusSalesAttributesSupplementarySkuImages';
export declare class Product202309EditProductRequestBodySkusSalesAttributes {
    'id'?: string;
    'name'?: string;
    'skuImg'?: Product202309EditProductRequestBodySkusSalesAttributesSkuImg;
    'supplementarySkuImages'?: Array<Product202309EditProductRequestBodySkusSalesAttributesSupplementarySkuImages>;
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
//# sourceMappingURL=EditProductRequestBodySkusSalesAttributes.d.ts.map