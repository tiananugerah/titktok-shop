import { Promotion202309GetActivityResponseDataProductsSkusActivityPrice } from './GetActivityResponseDataProductsSkusActivityPrice';
export declare class Promotion202309GetActivityResponseDataProductsSkus {
    'activityPrice'?: Promotion202309GetActivityResponseDataProductsSkusActivityPrice;
    'discount'?: string;
    'id'?: string;
    'quantityLimit'?: number;
    'quantityPerUser'?: number;
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
//# sourceMappingURL=GetActivityResponseDataProductsSkus.d.ts.map