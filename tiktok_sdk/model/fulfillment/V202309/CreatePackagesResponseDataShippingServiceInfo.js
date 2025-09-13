"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309CreatePackagesResponseDataShippingServiceInfo = void 0;
class Fulfillment202309CreatePackagesResponseDataShippingServiceInfo {
    static getAttributeTypeMap() {
        return Fulfillment202309CreatePackagesResponseDataShippingServiceInfo.attributeTypeMap;
    }
}
exports.Fulfillment202309CreatePackagesResponseDataShippingServiceInfo = Fulfillment202309CreatePackagesResponseDataShippingServiceInfo;
Fulfillment202309CreatePackagesResponseDataShippingServiceInfo.discriminator = undefined;
Fulfillment202309CreatePackagesResponseDataShippingServiceInfo.attributeTypeMap = [
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
//# sourceMappingURL=CreatePackagesResponseDataShippingServiceInfo.js.map