"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponseDataSampleStatus = void 0;
class AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponseDataSampleStatus {
    static getAttributeTypeMap() {
        return AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponseDataSampleStatus.attributeTypeMap;
    }
}
exports.AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponseDataSampleStatus = AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponseDataSampleStatus;
AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponseDataSampleStatus.discriminator = undefined;
AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponseDataSampleStatus.attributeTypeMap = [
    {
        "name": "deliveryOption",
        "baseName": "delivery_option",
        "type": "string"
    },
    {
        "name": "estimatedEarliestDeliveryDate",
        "baseName": "estimated_earliest_delivery_date",
        "type": "string"
    },
    {
        "name": "estimatedLatestDeliveryDate",
        "baseName": "estimated_latest_delivery_date",
        "type": "string"
    },
    {
        "name": "quantity",
        "baseName": "quantity",
        "type": "number"
    },
    {
        "name": "shippingProviderName",
        "baseName": "shipping_provider_name",
        "type": "string"
    },
    {
        "name": "trackingResults",
        "baseName": "tracking_results",
        "type": "Array<AffiliatePartner202501GetAffiliateCampaignCreatorProductSampleStatusResponseDataSampleStatusTrackingResults>"
    }
];
//# sourceMappingURL=GetAffiliateCampaignCreatorProductSampleStatusResponseDataSampleStatus.js.map