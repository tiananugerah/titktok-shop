import { Promotion202406SearchCouponsResponseDataCouponsDiscountMaxDiscount } from './SearchCouponsResponseDataCouponsDiscountMaxDiscount';
import { Promotion202406SearchCouponsResponseDataCouponsDiscountReductionAmount } from './SearchCouponsResponseDataCouponsDiscountReductionAmount';
export declare class Promotion202406SearchCouponsResponseDataCouponsDiscount {
    'maxDiscount'?: Promotion202406SearchCouponsResponseDataCouponsDiscountMaxDiscount;
    'percentage'?: string;
    'reductionAmount'?: Promotion202406SearchCouponsResponseDataCouponsDiscountReductionAmount;
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
//# sourceMappingURL=SearchCouponsResponseDataCouponsDiscount.d.ts.map