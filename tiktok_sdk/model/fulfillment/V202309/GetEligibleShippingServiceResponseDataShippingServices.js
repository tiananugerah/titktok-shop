"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309GetEligibleShippingServiceResponseDataShippingServices = void 0;
class Fulfillment202309GetEligibleShippingServiceResponseDataShippingServices {
    static getAttributeTypeMap() {
        return Fulfillment202309GetEligibleShippingServiceResponseDataShippingServices.attributeTypeMap;
    }
}
exports.Fulfillment202309GetEligibleShippingServiceResponseDataShippingServices = Fulfillment202309GetEligibleShippingServiceResponseDataShippingServices;
Fulfillment202309GetEligibleShippingServiceResponseDataShippingServices.discriminator = undefined;
Fulfillment202309GetEligibleShippingServiceResponseDataShippingServices.attributeTypeMap = [
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "earliestDeliveryDays",
        "baseName": "earliest_delivery_days",
        "type": "number"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "isDefault",
        "baseName": "is_default",
        "type": "boolean"
    },
    {
        "name": "latestDeliveryDays",
        "baseName": "latest_delivery_days",
        "type": "number"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "price",
        "baseName": "price",
        "type": "string"
    },
    {
        "name": "shippingProviderId",
        "baseName": "shipping_provider_id",
        "type": "string"
    },
    {
        "name": "shippingProviderName",
        "baseName": "shipping_provider_name",
        "type": "string"
    }
];
//# sourceMappingURL=GetEligibleShippingServiceResponseDataShippingServices.js.map