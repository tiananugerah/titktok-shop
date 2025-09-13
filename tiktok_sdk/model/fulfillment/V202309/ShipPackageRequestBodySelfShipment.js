"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309ShipPackageRequestBodySelfShipment = void 0;
class Fulfillment202309ShipPackageRequestBodySelfShipment {
    static getAttributeTypeMap() {
        return Fulfillment202309ShipPackageRequestBodySelfShipment.attributeTypeMap;
    }
}
exports.Fulfillment202309ShipPackageRequestBodySelfShipment = Fulfillment202309ShipPackageRequestBodySelfShipment;
Fulfillment202309ShipPackageRequestBodySelfShipment.discriminator = undefined;
Fulfillment202309ShipPackageRequestBodySelfShipment.attributeTypeMap = [
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
//# sourceMappingURL=ShipPackageRequestBodySelfShipment.js.map