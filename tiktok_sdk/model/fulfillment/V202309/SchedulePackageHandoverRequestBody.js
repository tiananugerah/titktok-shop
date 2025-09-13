"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309SchedulePackageHandoverRequestBody = void 0;
class Fulfillment202309SchedulePackageHandoverRequestBody {
    static getAttributeTypeMap() {
        return Fulfillment202309SchedulePackageHandoverRequestBody.attributeTypeMap;
    }
}
exports.Fulfillment202309SchedulePackageHandoverRequestBody = Fulfillment202309SchedulePackageHandoverRequestBody;
Fulfillment202309SchedulePackageHandoverRequestBody.discriminator = undefined;
Fulfillment202309SchedulePackageHandoverRequestBody.attributeTypeMap = [
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
        "name": "pickupSlot",
        "baseName": "pickup_slot",
        "type": "Fulfillment202309SchedulePackageHandoverRequestBodyPickupSlot"
    }
];
//# sourceMappingURL=SchedulePackageHandoverRequestBody.js.map