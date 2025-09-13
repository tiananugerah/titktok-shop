"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309MarkPackageAsShippedRequestBody = void 0;
class Fulfillment202309MarkPackageAsShippedRequestBody {
    static getAttributeTypeMap() {
        return Fulfillment202309MarkPackageAsShippedRequestBody.attributeTypeMap;
    }
}
exports.Fulfillment202309MarkPackageAsShippedRequestBody = Fulfillment202309MarkPackageAsShippedRequestBody;
Fulfillment202309MarkPackageAsShippedRequestBody.discriminator = undefined;
Fulfillment202309MarkPackageAsShippedRequestBody.attributeTypeMap = [
    {
        "name": "orderLineItemIds",
        "baseName": "order_line_item_ids",
        "type": "Array<string>"
    },
    {
        "name": "shippingProviderId",
        "baseName": "shipping_provider_id",
        "type": "string"
    },
    {
        "name": "trackingNumber",
        "baseName": "tracking_number",
        "type": "string"
    }
];
//# sourceMappingURL=MarkPackageAsShippedRequestBody.js.map