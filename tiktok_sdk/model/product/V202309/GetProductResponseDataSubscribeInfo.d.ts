import { Product202309GetProductResponseDataSubscribeInfoSubscribeDiscountDetails } from './GetProductResponseDataSubscribeInfoSubscribeDiscountDetails';
import { Product202309GetProductResponseDataSubscribeInfoSubscribePromotionConfig } from './GetProductResponseDataSubscribeInfoSubscribePromotionConfig';
export declare class Product202309GetProductResponseDataSubscribeInfo {
    'subscribeDiscountDetails'?: Array<Product202309GetProductResponseDataSubscribeInfoSubscribeDiscountDetails>;
    'subscribePromotionConfig'?: Array<Product202309GetProductResponseDataSubscribeInfoSubscribePromotionConfig>;
    'subscribeStatus'?: string;
    'supportSubscribe'?: boolean;
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
//# sourceMappingURL=GetProductResponseDataSubscribeInfo.d.ts.map