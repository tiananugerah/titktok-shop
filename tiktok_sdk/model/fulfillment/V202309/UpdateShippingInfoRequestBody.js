"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309UpdateShippingInfoRequestBody = void 0;
class Fulfillment202309UpdateShippingInfoRequestBody {
    static getAttributeTypeMap() {
        return Fulfillment202309UpdateShippingInfoRequestBody.attributeTypeMap;
    }
}
exports.Fulfillment202309UpdateShippingInfoRequestBody = Fulfillment202309UpdateShippingInfoRequestBody;
Fulfillment202309UpdateShippingInfoRequestBody.discriminator = undefined;
Fulfillment202309UpdateShippingInfoRequestBody.attributeTypeMap = [
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
//# sourceMappingURL=UpdateShippingInfoRequestBody.js.map