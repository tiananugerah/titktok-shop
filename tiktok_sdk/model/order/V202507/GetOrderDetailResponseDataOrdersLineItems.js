"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order202507GetOrderDetailResponseDataOrdersLineItems = void 0;
class Order202507GetOrderDetailResponseDataOrdersLineItems {
    static getAttributeTypeMap() {
        return Order202507GetOrderDetailResponseDataOrdersLineItems.attributeTypeMap;
    }
}
exports.Order202507GetOrderDetailResponseDataOrdersLineItems = Order202507GetOrderDetailResponseDataOrdersLineItems;
Order202507GetOrderDetailResponseDataOrdersLineItems.discriminator = undefined;
Order202507GetOrderDetailResponseDataOrdersLineItems.attributeTypeMap = [
    {
        "name": "buyerServiceFee",
        "baseName": "buyer_service_fee",
        "type": "string"
    },
    {
        "name": "cancelReason",
        "baseName": "cancel_reason",
        "type": "string"
    },
    {
        "name": "cancelUser",
        "baseName": "cancel_user",
        "type": "string"
    },
    {
        "name": "combinedListingSkus",
        "baseName": "combined_listing_skus",
        "type": "Array<Order202507GetOrderDetailResponseDataOrdersLineItemsCombinedListingSkus>"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string"
    },
    {
        "name": "displayStatus",
        "baseName": "display_status",
        "type": "string"
    },
    {
        "name": "handlingDurationDays",
        "baseName": "handling_duration_days",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "isDangerousGood",
        "baseName": "is_dangerous_good",
        "type": "boolean"
    },
    {
        "name": "isGift",
        "baseName": "is_gift",
        "type": "boolean"
    },
    {
        "name": "itemTax",
        "baseName": "item_tax",
        "type": "Array<Order202507GetOrderDetailResponseDataOrdersLineItemsItemTax>"
    },
    {
        "name": "needsPrescription",
        "baseName": "needs_prescription",
        "type": "boolean"
    },
    {
        "name": "originalPrice",
        "baseName": "original_price",
        "type": "string"
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
        "name": "platformDiscount",
        "baseName": "platform_discount",
        "type": "string"
    },
    {
        "name": "productId",
        "baseName": "product_id",
        "type": "string"
    },
    {
        "name": "productName",
        "baseName": "product_name",
        "type": "string"
    },
    {
        "name": "retailDeliveryFee",
        "baseName": "retail_delivery_fee",
        "type": "string"
    },
    {
        "name": "rtsTime",
        "baseName": "rts_time",
        "type": "number"
    },
    {
        "name": "salePrice",
        "baseName": "sale_price",
        "type": "string"
    },
    {
        "name": "sellerDiscount",
        "baseName": "seller_discount",
        "type": "string"
    },
    {
        "name": "sellerSku",
        "baseName": "seller_sku",
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
    },
    {
        "name": "skuId",
        "baseName": "sku_id",
        "type": "string"
    },
    {
        "name": "skuImage",
        "baseName": "sku_image",
        "type": "string"
    },
    {
        "name": "skuName",
        "baseName": "sku_name",
        "type": "string"
    },
    {
        "name": "skuType",
        "baseName": "sku_type",
        "type": "string"
    },
    {
        "name": "smallOrderFee",
        "baseName": "small_order_fee",
        "type": "string"
    },
    {
        "name": "trackingNumber",
        "baseName": "tracking_number",
        "type": "string"
    }
];
//# sourceMappingURL=GetOrderDetailResponseDataOrdersLineItems.js.map