import { Promotion202309UpdateActivityProductRequestBodyProductsSkus } from './UpdateActivityProductRequestBodyProductsSkus';
export declare class Promotion202309UpdateActivityProductRequestBodyProducts {
    'activityPriceAmount'?: string;
    'discount'?: string;
    'id'?: string;
    'quantityLimit'?: number;
    'quantityPerUser'?: number;
    'skus'?: Array<Promotion202309UpdateActivityProductRequestBodyProductsSkus>;
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
//# sourceMappingURL=UpdateActivityProductRequestBodyProducts.d.ts.map