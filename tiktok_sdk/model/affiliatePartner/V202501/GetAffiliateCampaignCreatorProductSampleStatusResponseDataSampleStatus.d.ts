import { AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponseDataSampleStatusTrackingResults } from './GetAffiliateCampaignCreatorProductSampleStatusResponseDataSampleStatusTrackingResults';
export declare class AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponseDataSampleStatus {
    'deliveryOption'?: string;
    'estimatedEarliestDeliveryDate'?: string;
    'estimatedLatestDeliveryDate'?: string;
    'quantity'?: number;
    'shippingProviderName'?: string;
    'trackingResults'?: Array<AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponseDataSampleStatusTrackingResults>;
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
//# sourceMappingURL=GetAffiliateCampaignCreatorProductSampleStatusResponseDataSampleStatus.d.ts.map