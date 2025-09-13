import { Promotion202309SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount } from './SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount';
import { Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscount } from './SearchActivitiesResponseDataActivitiesDiscountGiftDiscount';
import { Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscount } from './SearchActivitiesResponseDataActivitiesDiscountShippingDiscount';
export declare class Promotion202309SearchActivitiesResponseDataActivitiesDiscount {
    'bmsmDiscount'?: Promotion202309SearchActivitiesResponseDataActivitiesDiscountBmsmDiscount;
    'giftDiscount'?: Promotion202309SearchActivitiesResponseDataActivitiesDiscountGiftDiscount;
    'shippingDiscount'?: Promotion202309SearchActivitiesResponseDataActivitiesDiscountShippingDiscount;
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
//# sourceMappingURL=SearchActivitiesResponseDataActivitiesDiscount.d.ts.map