import { Promotion202309GetActivityResponseDataDiscountBmsmDiscount } from './GetActivityResponseDataDiscountBmsmDiscount';
import { Promotion202309GetActivityResponseDataDiscountGiftDiscount } from './GetActivityResponseDataDiscountGiftDiscount';
import { Promotion202309GetActivityResponseDataDiscountShippingDiscount } from './GetActivityResponseDataDiscountShippingDiscount';
export declare class Promotion202309GetActivityResponseDataDiscount {
    'bmsmDiscount'?: Promotion202309GetActivityResponseDataDiscountBmsmDiscount;
    'giftDiscount'?: Promotion202309GetActivityResponseDataDiscountGiftDiscount;
    'shippingDiscount'?: Promotion202309GetActivityResponseDataDiscountShippingDiscount;
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
//# sourceMappingURL=GetActivityResponseDataDiscount.d.ts.map