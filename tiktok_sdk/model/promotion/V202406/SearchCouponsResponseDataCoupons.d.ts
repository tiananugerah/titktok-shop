import { Promotion202406SearchCouponsResponseDataCouponsClaimDuration } from './SearchCouponsResponseDataCouponsClaimDuration';
import { Promotion202406SearchCouponsResponseDataCouponsDiscount } from './SearchCouponsResponseDataCouponsDiscount';
import { Promotion202406SearchCouponsResponseDataCouponsRedemptionDuration } from './SearchCouponsResponseDataCouponsRedemptionDuration';
import { Promotion202406SearchCouponsResponseDataCouponsThreshold } from './SearchCouponsResponseDataCouponsThreshold';
import { Promotion202406SearchCouponsResponseDataCouponsUsageLimits } from './SearchCouponsResponseDataCouponsUsageLimits';
export declare class Promotion202406SearchCouponsResponseDataCoupons {
    'claimDuration'?: Promotion202406SearchCouponsResponseDataCouponsClaimDuration;
    'createTime'?: number;
    'creationSource'?: string;
    'discount'?: Promotion202406SearchCouponsResponseDataCouponsDiscount;
    'displayType'?: string;
    'id'?: string;
    'productScope'?: string;
    'promoCode'?: string;
    'redemptionDuration'?: Promotion202406SearchCouponsResponseDataCouponsRedemptionDuration;
    'status'?: string;
    'targetBuyerSegment'?: string;
    'threshold'?: Promotion202406SearchCouponsResponseDataCouponsThreshold;
    'title'?: string;
    'updateTime'?: number;
    'usageLimits'?: Promotion202406SearchCouponsResponseDataCouponsUsageLimits;
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
//# sourceMappingURL=SearchCouponsResponseDataCoupons.d.ts.map