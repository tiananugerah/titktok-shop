"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309BatchShipPackagesRequestBodyPackages = void 0;
class Fulfillment202309BatchShipPackagesRequestBodyPackages {
    static getAttributeTypeMap() {
        return Fulfillment202309BatchShipPackagesRequestBodyPackages.attributeTypeMap;
    }
}
exports.Fulfillment202309BatchShipPackagesRequestBodyPackages = Fulfillment202309BatchShipPackagesRequestBodyPackages;
Fulfillment202309BatchShipPackagesRequestBodyPackages.discriminator = undefined;
Fulfillment202309BatchShipPackagesRequestBodyPackages.attributeTypeMap = [
    {
        "name": "handoverMethod",
        "baseName": "handover_method",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "pickupSlot",
        "baseName": "pickup_slot",
        "type": "Fulfillment202309BatchShipPackagesRequestBodyPackagesPickupSlot"
    },
    {
        "name": "selfShipment",
        "baseName": "self_shipment",
        "type": "Fulfillment202309BatchShipPackagesRequestBodyPackagesSelfShipment"
    }
];
//# sourceMappingURL=BatchShipPackagesRequestBodyPackages.js.map