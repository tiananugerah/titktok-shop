import { Promotion202406GetCouponResponseDataCouponClaimDuration } from './GetCouponResponseDataCouponClaimDuration';
import { Promotion202406GetCouponResponseDataCouponDiscount } from './GetCouponResponseDataCouponDiscount';
import { Promotion202406GetCouponResponseDataCouponLiveTasks } from './GetCouponResponseDataCouponLiveTasks';
import { Promotion202406GetCouponResponseDataCouponRedemptionDuration } from './GetCouponResponseDataCouponRedemptionDuration';
import { Promotion202406GetCouponResponseDataCouponThreshold } from './GetCouponResponseDataCouponThreshold';
import { Promotion202406GetCouponResponseDataCouponUsageLimits } from './GetCouponResponseDataCouponUsageLimits';
import { Promotion202406GetCouponResponseDataCouponUsageStats } from './GetCouponResponseDataCouponUsageStats';
export declare class Promotion202406GetCouponResponseDataCoupon {
    'claimDuration'?: Promotion202406GetCouponResponseDataCouponClaimDuration;
    'createTime'?: number;
    'creationSource'?: string;
    'discount'?: Promotion202406GetCouponResponseDataCouponDiscount;
    'displayChannels'?: Array<string>;
    'displayType'?: string;
    'id'?: string;
    'liveTasks'?: Array<Promotion202406GetCouponResponseDataCouponLiveTasks>;
    'productIds'?: Array<string>;
    'productScope'?: string;
    'promoCode'?: string;
    'redemptionDuration'?: Promotion202406GetCouponResponseDataCouponRedemptionDuration;
    'sellerTnc'?: string;
    'status'?: string;
    'targetBuyerSegment'?: string;
    'threshold'?: Promotion202406GetCouponResponseDataCouponThreshold;
    'title'?: string;
    'updateTime'?: number;
    'usageLimits'?: Promotion202406GetCouponResponseDataCouponUsageLimits;
    'usageStats'?: Promotion202406GetCouponResponseDataCouponUsageStats;
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
//# sourceMappingURL=GetCouponResponseDataCoupon.d.ts.map