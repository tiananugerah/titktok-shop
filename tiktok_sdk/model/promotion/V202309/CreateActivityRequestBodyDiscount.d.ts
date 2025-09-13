import { Promotion202309CreateActivityRequestBodyDiscountBmsmDiscount } from './CreateActivityRequestBodyDiscountBmsmDiscount';
import { Promotion202309CreateActivityRequestBodyDiscountGiftDiscount } from './CreateActivityRequestBodyDiscountGiftDiscount';
import { Promotion202309CreateActivityRequestBodyDiscountShippingDiscount } from './CreateActivityRequestBodyDiscountShippingDiscount';
export declare class Promotion202309CreateActivityRequestBodyDiscount {
    'bmsmDiscount'?: Promotion202309CreateActivityRequestBodyDiscountBmsmDiscount;
    'giftDiscount'?: Promotion202309CreateActivityRequestBodyDiscountGiftDiscount;
    'shippingDiscount'?: Promotion202309CreateActivityRequestBodyDiscountShippingDiscount;
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
//# sourceMappingURL=CreateActivityRequestBodyDiscount.d.ts.map