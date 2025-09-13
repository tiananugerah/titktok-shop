import { Affiliate202309GetShopProductsResponseDataProductsImages } from './GetShopProductsResponseDataProductsImages';
import { Affiliate202309GetShopProductsResponseDataProductsPrice } from './GetShopProductsResponseDataProductsPrice';
export declare class Affiliate202309GetShopProductsResponseDataProducts {
    'addedStatus'?: string;
    'brandName'?: string;
    'id'?: string;
    'images'?: Array<Affiliate202309GetShopProductsResponseDataProductsImages>;
    'price'?: Affiliate202309GetShopProductsResponseDataProductsPrice;
    'salesCount'?: number;
    'title'?: string;
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
//# sourceMappingURL=GetShopProductsResponseDataProducts.d.ts.map