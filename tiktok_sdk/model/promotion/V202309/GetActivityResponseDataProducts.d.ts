import { Promotion202309GetActivityResponseDataProductsActivityPrice } from './GetActivityResponseDataProductsActivityPrice';
import { Promotion202309GetActivityResponseDataProductsSkus } from './GetActivityResponseDataProductsSkus';
export declare class Promotion202309GetActivityResponseDataProducts {
    'activityPrice'?: Promotion202309GetActivityResponseDataProductsActivityPrice;
    'discount'?: string;
    'id'?: string;
    'quantityLimit'?: number;
    'quantityPerUser'?: number;
    'skus'?: Array<Promotion202309GetActivityResponseDataProductsSkus>;
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
//# sourceMappingURL=GetActivityResponseDataProducts.d.ts.map