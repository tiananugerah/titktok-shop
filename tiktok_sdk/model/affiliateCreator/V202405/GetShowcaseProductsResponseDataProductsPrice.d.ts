import { AffiliateCreator202405GetShowcaseProductsResponseDataProductsPriceOriginalPrice } from './GetShowcaseProductsResponseDataProductsPriceOriginalPrice';
import { AffiliateCreator202405GetShowcaseProductsResponseDataProductsPricePlatformDiscountPrice } from './GetShowcaseProductsResponseDataProductsPricePlatformDiscountPrice';
import { AffiliateCreator202405GetShowcaseProductsResponseDataProductsPriceSellerDiscountPrice } from './GetShowcaseProductsResponseDataProductsPriceSellerDiscountPrice';
export declare class AffiliateCreator202405GetShowcaseProductsResponseDataProductsPrice {
    'originalPrice'?: AffiliateCreator202405GetShowcaseProductsResponseDataProductsPriceOriginalPrice;
    'platformDiscountPrice'?: AffiliateCreator202405GetShowcaseProductsResponseDataProductsPricePlatformDiscountPrice;
    'sellerDiscountPrice'?: AffiliateCreator202405GetShowcaseProductsResponseDataProductsPriceSellerDiscountPrice;
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
//# sourceMappingURL=GetShowcaseProductsResponseDataProductsPrice.d.ts.map