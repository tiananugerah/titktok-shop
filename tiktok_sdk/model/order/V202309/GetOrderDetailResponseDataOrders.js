"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order202309GetOrderDetailResponseDataOrders = void 0;
class Order202309GetOrderDetailResponseDataOrders {
    static getAttributeTypeMap() {
        return Order202309GetOrderDetailResponseDataOrders.attributeTypeMap;
    }
}
exports.Order202309GetOrderDetailResponseDataOrders = Order202309GetOrderDetailResponseDataOrders;
Order202309GetOrderDetailResponseDataOrders.discriminator = undefined;
Order202309GetOrderDetailResponseDataOrders.attributeTypeMap = [
    {
        "name": "autoCombineGroupId",
        "baseName": "auto_combine_group_id",
        "type": "string"
    },
    {
        "name": "buyerEmail",
        "baseName": "buyer_email",
        "type": "string"
    },
    {
        "name": "buyerMessage",
        "baseName": "buyer_message",
        "type": "string"
    },
    {
        "name": "cancelOrderSlaTime",
        "baseName": "cancel_order_sla_time",
        "type": "number"
    },
    {
        "name": "cancelReason",
        "baseName": "cancel_reason",
        "type": "string"
    },
    {
        "name": "cancelTime",
        "baseName": "cancel_time",
        "type": "number"
    },
    {
        "name": "cancellationInitiator",
        "baseName": "cancellation_initiator",
        "type": "string"
    },
    {
        "name": "channelEntityNationalRegistryId",
        "baseName": "channel_entity_national_registry_id",
        "type": "string"
    },
    {
        "name": "collectionDueTime",
        "baseName": "collection_due_time",
        "type": "number"
    },
    {
        "name": "collectionTime",
        "baseName": "collection_time",
        "type": "number"
    },
    {
        "name": "commercePlatform",
        "baseName": "commerce_platform",
        "type": "string"
    },
    {
        "name": "consultationId",
        "baseName": "consultation_id",
        "type": "string"
    },
    {
        "name": "cpf",
        "baseName": "cpf",
        "type": "string"
    },
    {
        "name": "cpfName",
        "baseName": "cpf_name",
        "type": "string"
    },
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "deliveryDueTime",
        "baseName": "delivery_due_time",
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
        "name": "deliveryOptionRequiredDeliveryTime",
        "baseName": "delivery_option_required_delivery_time",
        "type": "number"
    },
    {
        "name": "deliverySlaTime",
        "baseName": "delivery_sla_time",
        "type": "number"
    },
    {
        "name": "deliveryTime",
        "baseName": "delivery_time",
        "type": "number"
    },
    {
        "name": "deliveryType",
        "baseName": "delivery_type",
        "type": "string"
    },
    {
        "name": "exchangeSourceOrderId",
        "baseName": "exchange_source_order_id",
        "type": "string"
    },
    {
        "name": "fastDeliveryProgram",
        "baseName": "fast_delivery_program",
        "type": "string"
    },
    {
        "name": "fastDispatchSlaTime",
        "baseName": "fast_dispatch_sla_time",
        "type": "number"
    },
    {
        "name": "fulfillmentPriorityLevel",
        "baseName": "fulfillment_priority_level",
        "type": "number"
    },
    {
        "name": "fulfillmentType",
        "baseName": "fulfillment_type",
        "type": "string"
    },
    {
        "name": "handlingDuration",
        "baseName": "handling_duration",
        "type": "Order202309GetOrderDetailResponseDataOrdersHandlingDuration"
    },
    {
        "name": "hasUpdatedRecipientAddress",
        "baseName": "has_updated_recipient_address",
        "type": "boolean"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "isBuyerRequestCancel",
        "baseName": "is_buyer_request_cancel",
        "type": "boolean"
    },
    {
        "name": "isCod",
        "baseName": "is_cod",
        "type": "boolean"
    },
    {
        "name": "isExchangeOrder",
        "baseName": "is_exchange_order",
        "type": "boolean"
    },
    {
        "name": "isOnHoldOrder",
        "baseName": "is_on_hold_order",
        "type": "boolean"
    },
    {
        "name": "isReplacementOrder",
        "baseName": "is_replacement_order",
        "type": "boolean"
    },
    {
        "name": "isSampleOrder",
        "baseName": "is_sample_order",
        "type": "boolean"
    },
    {
        "name": "lineItems",
        "baseName": "line_items",
        "type": "Array<Order202309GetOrderDetailResponseDataOrdersLineItems>"
    },
    {
        "name": "needUploadInvoice",
        "baseName": "need_upload_invoice",
        "type": "string"
    },
    {
        "name": "orderType",
        "baseName": "order_type",
        "type": "string"
    },
    {
        "name": "packages",
        "baseName": "packages",
        "type": "Array<Order202309GetOrderDetailResponseDataOrdersPackages>"
    },
    {
        "name": "paidTime",
        "baseName": "paid_time",
        "type": "number"
    },
    {
        "name": "payment",
        "baseName": "payment",
        "type": "Order202309GetOrderDetailResponseDataOrdersPayment"
    },
    {
        "name": "paymentAuthCode",
        "baseName": "payment_auth_code",
        "type": "string"
    },
    {
        "name": "paymentCardType",
        "baseName": "payment_card_type",
        "type": "string"
    },
    {
        "name": "paymentMethodCode",
        "baseName": "payment_method_code",
        "type": "string"
    },
    {
        "name": "paymentMethodName",
        "baseName": "payment_method_name",
        "type": "string"
    },
    {
        "name": "pickUpCutOffTime",
        "baseName": "pick_up_cut_off_time",
        "type": "number"
    },
    {
        "name": "recipientAddress",
        "baseName": "recipient_address",
        "type": "Order202309GetOrderDetailResponseDataOrdersRecipientAddress"
    },
    {
        "name": "recommendedShippingTime",
        "baseName": "recommended_shipping_time",
        "type": "number"
    },
    {
        "name": "releaseDate",
        "baseName": "release_date",
        "type": "number"
    },
    {
        "name": "replacedOrderId",
        "baseName": "replaced_order_id",
        "type": "string"
    },
    {
        "name": "requestCancelTime",
        "baseName": "request_cancel_time",
        "type": "number"
    },
    {
        "name": "rtsSlaTime",
        "baseName": "rts_sla_time",
        "type": "number"
    },
    {
        "name": "rtsTime",
        "baseName": "rts_time",
        "type": "number"
    },
    {
        "name": "sellerNote",
        "baseName": "seller_note",
        "type": "string"
    },
    {
        "name": "shippingDueTime",
        "baseName": "shipping_due_time",
        "type": "number"
    },
    {
        "name": "shippingProvider",
        "baseName": "shipping_provider",
        "type": "string"
    },
    {
        "name": "shippingProviderId",
        "baseName": "shipping_provider_id",
        "type": "string"
    },
    {
        "name": "shippingType",
        "baseName": "shipping_type",
        "type": "string"
    },
    {
        "name": "splitOrCombineTag",
        "baseName": "split_or_combine_tag",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "trackingNumber",
        "baseName": "tracking_number",
        "type": "string"
    },
    {
        "name": "ttsSlaTime",
        "baseName": "tts_sla_time",
        "type": "number"
    },
    {
        "name": "updateTime",
        "baseName": "update_time",
        "type": "number"
    },
    {
        "name": "userId",
        "baseName": "user_id",
        "type": "string"
    },
    {
        "name": "warehouseId",
        "baseName": "warehouse_id",
        "type": "string"
    }
];
//# sourceMappingURL=GetOrderDetailResponseDataOrders.js.map