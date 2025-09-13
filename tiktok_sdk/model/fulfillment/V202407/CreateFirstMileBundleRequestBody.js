"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202407CreateFirstMileBundleRequestBody = void 0;
class Fulfillment202407CreateFirstMileBundleRequestBody {
    static getAttributeTypeMap() {
        return Fulfillment202407CreateFirstMileBundleRequestBody.attributeTypeMap;
    }
}
exports.Fulfillment202407CreateFirstMileBundleRequestBody = Fulfillment202407CreateFirstMileBundleRequestBody;
Fulfillment202407CreateFirstMileBundleRequestBody.discriminator = undefined;
Fulfillment202407CreateFirstMileBundleRequestBody.attributeTypeMap = [
    {
        "name": "handoverMethod",
        "baseName": "handover_method",
        "type": "string"
    },
    {
        "name": "orderIds",
        "baseName": "order_ids",
        "type": "Array<string>"
    },
    {
        "name": "phoneTailNumber",
        "baseName": "phone_tail_number",
        "type": "string"
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
//# sourceMappingURL=CreateFirstMileBundleRequestBody.js.map