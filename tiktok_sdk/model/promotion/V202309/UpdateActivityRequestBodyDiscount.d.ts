import { Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscount } from './UpdateActivityRequestBodyDiscountBmsmDiscount';
import { Promotion202309UpdateActivityRequestBodyDiscountGiftDiscount } from './UpdateActivityRequestBodyDiscountGiftDiscount';
import { Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount } from './UpdateActivityRequestBodyDiscountShippingDiscount';
export declare class Promotion202309UpdateActivityRequestBodyDiscount {
    'bmsmDiscount'?: Promotion202309UpdateActivityRequestBodyDiscountBmsmDiscount;
    'giftDiscount'?: Promotion202309UpdateActivityRequestBodyDiscountGiftDiscount;
    'shippingDiscount'?: Promotion202309UpdateActivityRequestBodyDiscountShippingDiscount;
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
//# sourceMappingURL=UpdateActivityRequestBodyDiscount.d.ts.map