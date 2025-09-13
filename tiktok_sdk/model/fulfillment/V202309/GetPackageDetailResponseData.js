"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309GetPackageDetailResponseData = void 0;
class Fulfillment202309GetPackageDetailResponseData {
    static getAttributeTypeMap() {
        return Fulfillment202309GetPackageDetailResponseData.attributeTypeMap;
    }
}
exports.Fulfillment202309GetPackageDetailResponseData = Fulfillment202309GetPackageDetailResponseData;
Fulfillment202309GetPackageDetailResponseData.discriminator = undefined;
Fulfillment202309GetPackageDetailResponseData.attributeTypeMap = [
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "deliveryOptionId",
        "baseName": "delivery_option_id",
        "type": "string"
    },
    {
        "name": "deliveryOptionName",
        "baseName": "delivery_option_name",
        "type": "string"
    },
    {
        "name": "dimension",
        "baseName": "dimension",
        "type": "Fulfillment202309GetPackageDetailResponseDataDimension"
    },
    {
        "name": "handoverMethod",
        "baseName": "handover_method",
        "type": "string"
    },
    {
        "name": "hasMultiSkus",
        "baseName": "has_multi_skus",
        "type": "boolean"
    },
    {
        "name": "insurance",
        "baseName": "insurance",
        "type": "Fulfillment202309GetPackageDetailResponseDataInsurance"
    },
    {
        "name": "lastMileTrackingNumber",
        "baseName": "last_mile_tracking_number",
        "type": "string"
    },
    {
        "name": "noteTag",
        "baseName": "note_tag",
        "type": "string"
    },
    {
        "name": "orderLineItemIds",
        "baseName": "order_line_item_ids",
        "type": "Array<string>"
    },
    {
        "name": "orders",
        "baseName": "orders",
        "type": "Array<Fulfillment202309GetPackageDetailResponseDataOrders>"
    },
    {
        "name": "packageId",
        "baseName": "package_id",
        "type": "string"
    },
    {
        "name": "packageStatus",
        "baseName": "package_status",
        "type": "string"
    },
    {
        "name": "pickupSlot",
        "baseName": "pickup_slot",
        "type": "Fulfillment202309GetPackageDetailResponseDataPickupSlot"
    },
    {
        "name": "recipientAddress",
        "baseName": "recipient_address",
        "type": "Fulfillment202309GetPackageDetailResponseDataRecipientAddress"
    },
    {
        "name": "senderAddress",
        "baseName": "sender_address",
        "type": "Fulfillment202309GetPackageDetailResponseDataSenderAddress"
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
    },
    {
        "name": "shippingType",
        "baseName": "shipping_type",
        "type": "string"
    },
    {
        "name": "splitAndCombineTag",
        "baseName": "split_and_combine_tag",
        "type": "string"
    },
    {
        "name": "trackingNumber",
        "baseName": "tracking_number",
        "type": "string"
    },
    {
        "name": "updateTime",
        "baseName": "update_time",
        "type": "number"
    },
    {
        "name": "weight",
        "baseName": "weight",
        "type": "Fulfillment202309GetPackageDetailResponseDataWeight"
    }
];
//# sourceMappingURL=GetPackageDetailResponseData.js.map