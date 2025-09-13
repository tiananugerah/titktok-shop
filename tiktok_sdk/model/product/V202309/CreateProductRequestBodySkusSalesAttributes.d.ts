import { Product202309CreateProductRequestBodySkusSalesAttributesSkuImg } from './CreateProductRequestBodySkusSalesAttributesSkuImg';
import { Product202309CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages } from './CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages';
export declare class Product202309CreateProductRequestBodySkusSalesAttributes {
    'id'?: string;
    'name'?: string;
    'skuImg'?: Product202309CreateProductRequestBodySkusSalesAttributesSkuImg;
    'supplementarySkuImages'?: Array<Product202309CreateProductRequestBodySkusSalesAttributesSupplementarySkuImages>;
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
//# sourceMappingURL=CreateProductRequestBodySkusSalesAttributes.d.ts.map