"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309BatchShipPackagesRequestBodyPackagesSelfShipment = void 0;
class Fulfillment202309BatchShipPackagesRequestBodyPackagesSelfShipment {
    static getAttributeTypeMap() {
        return Fulfillment202309BatchShipPackagesRequestBodyPackagesSelfShipment.attributeTypeMap;
    }
}
exports.Fulfillment202309BatchShipPackagesRequestBodyPackagesSelfShipment = Fulfillment202309BatchShipPackagesRequestBodyPackagesSelfShipment;
Fulfillment202309BatchShipPackagesRequestBodyPackagesSelfShipment.discriminator = undefined;
Fulfillment202309BatchShipPackagesRequestBodyPackagesSelfShipment.attributeTypeMap = [
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
//# sourceMappingURL=BatchShipPackagesRequestBodyPackagesSelfShipment.js.map