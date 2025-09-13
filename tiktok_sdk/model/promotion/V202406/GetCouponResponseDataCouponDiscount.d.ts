import { Promotion202406GetCouponResponseDataCouponDiscountMaxDiscount } from './GetCouponResponseDataCouponDiscountMaxDiscount';
import { Promotion202406GetCouponResponseDataCouponDiscountReductionAmount } from './GetCouponResponseDataCouponDiscountReductionAmount';
export declare class Promotion202406GetCouponResponseDataCouponDiscount {
    'maxDiscount'?: Promotion202406GetCouponResponseDataCouponDiscountMaxDiscount;
    'percentage'?: string;
    'reductionAmount'?: Promotion202406GetCouponResponseDataCouponDiscountReductionAmount;
    'type'?: string;
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
//# sourceMappingURL=GetCouponResponseDataCouponDiscount.d.ts.map