import { AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusActualCommissionBase } from './SearchTapAffiliateOrdersResponseDataOrdersSkusActualCommissionBase';
import { AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusActualCreatorCommission } from './SearchTapAffiliateOrdersResponseDataOrdersSkusActualCreatorCommission';
import { AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusActualCreatorCommissionRewardFee } from './SearchTapAffiliateOrdersResponseDataOrdersSkusActualCreatorCommissionRewardFee';
import { AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusActualPartnerCommissionRewardFee } from './SearchTapAffiliateOrdersResponseDataOrdersSkusActualPartnerCommissionRewardFee';
import { AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusActualTapCommission } from './SearchTapAffiliateOrdersResponseDataOrdersSkusActualTapCommission';
import { AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedCommissionBase } from './SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedCommissionBase';
import { AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedCreatorCommission } from './SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedCreatorCommission';
import { AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedCreatorCommissionRewardFee } from './SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedCreatorCommissionRewardFee';
import { AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedPartnerCommissionRewardFee } from './SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedPartnerCommissionRewardFee';
import { AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedTapCommission } from './SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedTapCommission';
import { AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusPrice } from './SearchTapAffiliateOrdersResponseDataOrdersSkusPrice';
export declare class AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkus {
    'actualCommissionBase'?: AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusActualCommissionBase;
    'actualCreatorCommission'?: AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusActualCreatorCommission;
    'actualCreatorCommissionRewardFee'?: AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusActualCreatorCommissionRewardFee;
    'actualPartnerCommissionRewardFee'?: AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusActualPartnerCommissionRewardFee;
    'actualTapCommission'?: AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusActualTapCommission;
    'campaignId'?: string;
    'contentId'?: string;
    'contentType'?: string;
    'creatorCommissionRate'?: number;
    'creatorCommissionRewardRate'?: number;
    'creatorUsername'?: string;
    'estimatedCommissionBase'?: AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedCommissionBase;
    'estimatedCreatorCommission'?: AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedCreatorCommission;
    'estimatedCreatorCommissionRewardFee'?: AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedCreatorCommissionRewardFee;
    'estimatedPartnerCommissionRewardFee'?: AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedPartnerCommissionRewardFee;
    'estimatedTapCommission'?: AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusEstimatedTapCommission;
    'id'?: string;
    'partnerCommissionRewardRate'?: number;
    'price'?: AffiliatePartner202411SearchTapAffiliateOrdersResponseDataOrdersSkusPrice;
    'productId'?: string;
    'productName'?: string;
    'quantity'?: number;
    'refundedQuantity'?: number;
    'returnedQuantity'?: number;
    'tapCommissionRate'?: number;
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
//# sourceMappingURL=SearchTapAffiliateOrdersResponseDataOrdersSkus.d.ts.map