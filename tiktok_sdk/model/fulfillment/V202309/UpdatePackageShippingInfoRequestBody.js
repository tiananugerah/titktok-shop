"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309UpdatePackageShippingInfoRequestBody = void 0;
class Fulfillment202309UpdatePackageShippingInfoRequestBody {
    static getAttributeTypeMap() {
        return Fulfillment202309UpdatePackageShippingInfoRequestBody.attributeTypeMap;
    }
}
exports.Fulfillment202309UpdatePackageShippingInfoRequestBody = Fulfillment202309UpdatePackageShippingInfoRequestBody;
Fulfillment202309UpdatePackageShippingInfoRequestBody.discriminator = undefined;
Fulfillment202309UpdatePackageShippingInfoRequestBody.attributeTypeMap = [
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
//# sourceMappingURL=UpdatePackageShippingInfoRequestBody.js.map