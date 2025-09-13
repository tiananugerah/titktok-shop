"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309SchedulePackageHandoverResponseData = void 0;
class Fulfillment202309SchedulePackageHandoverResponseData {
    static getAttributeTypeMap() {
        return Fulfillment202309SchedulePackageHandoverResponseData.attributeTypeMap;
    }
}
exports.Fulfillment202309SchedulePackageHandoverResponseData = Fulfillment202309SchedulePackageHandoverResponseData;
Fulfillment202309SchedulePackageHandoverResponseData.discriminator = undefined;
Fulfillment202309SchedulePackageHandoverResponseData.attributeTypeMap = [
    {
        "name": "createTime",
        "baseName": "create_time",
        "type": "number"
    },
    {
        "name": "dimension",
        "baseName": "dimension",
        "type": "Fulfillment202309SchedulePackageHandoverResponseDataDimension"
    },
    {
        "name": "handoverMethod",
        "baseName": "handover_method",
        "type": "string"
    },
    {
        "name": "orderId",
        "baseName": "order_id",
        "type": "string"
    },
    {
        "name": "orderLineItemIds",
        "baseName": "order_line_item_ids",
        "type": "Array<string>"
    },
    {
        "name": "packageId",
        "baseName": "package_id",
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
        "type": "Fulfillment202309SchedulePackageHandoverResponseDataWeight"
    }
];
//# sourceMappingURL=SchedulePackageHandoverResponseData.js.map