import { Affiliate202309GetShowcaseProductsoldResponseDataProductsPriceOriginalPrice } from './GetShowcaseProductsoldResponseDataProductsPriceOriginalPrice';
import { Affiliate202309GetShowcaseProductsoldResponseDataProductsPricePlatformDiscountPrice } from './GetShowcaseProductsoldResponseDataProductsPricePlatformDiscountPrice';
import { Affiliate202309GetShowcaseProductsoldResponseDataProductsPriceSellerDiscountPrice } from './GetShowcaseProductsoldResponseDataProductsPriceSellerDiscountPrice';
export declare class Affiliate202309GetShowcaseProductsoldResponseDataProductsPrice {
    'originalPrice'?: Affiliate202309GetShowcaseProductsoldResponseDataProductsPriceOriginalPrice;
    'platformDiscountPrice'?: Affiliate202309GetShowcaseProductsoldResponseDataProductsPricePlatformDiscountPrice;
    'sellerDiscountPrice'?: Affiliate202309GetShowcaseProductsoldResponseDataProductsPriceSellerDiscountPrice;
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
//# sourceMappingURL=GetShowcaseProductsoldResponseDataProductsPrice.d.ts.map