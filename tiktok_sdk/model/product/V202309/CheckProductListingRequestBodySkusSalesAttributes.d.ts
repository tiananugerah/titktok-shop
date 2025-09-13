import { Product202309CheckProductListingRequestBodySkusSalesAttributesSkuImg } from './CheckProductListingRequestBodySkusSalesAttributesSkuImg';
import { Product202309CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages } from './CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages';
export declare class Product202309CheckProductListingRequestBodySkusSalesAttributes {
    'id'?: string;
    'name'?: string;
    'skuImg'?: Product202309CheckProductListingRequestBodySkusSalesAttributesSkuImg;
    'supplementarySkuImages'?: Array<Product202309CheckProductListingRequestBodySkusSalesAttributesSupplementarySkuImages>;
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
//# sourceMappingURL=CheckProductListingRequestBodySkusSalesAttributes.d.ts.map