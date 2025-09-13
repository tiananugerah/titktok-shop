"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309ShipPackageRequestBody = void 0;
class Fulfillment202309ShipPackageRequestBody {
    static getAttributeTypeMap() {
        return Fulfillment202309ShipPackageRequestBody.attributeTypeMap;
    }
}
exports.Fulfillment202309ShipPackageRequestBody = Fulfillment202309ShipPackageRequestBody;
Fulfillment202309ShipPackageRequestBody.discriminator = undefined;
Fulfillment202309ShipPackageRequestBody.attributeTypeMap = [
    {
        "name": "handoverMethod",
        "baseName": "handover_method",
        "type": "string"
    },
    {
        "name": "pickupSlot",
        "baseName": "pickup_slot",
        "type": "Fulfillment202309ShipPackageRequestBodyPickupSlot"
    },
    {
        "name": "selfShipment",
        "baseName": "self_shipment",
        "type": "Fulfillment202309ShipPackageRequestBodySelfShipment"
    }
];
//# sourceMappingURL=ShipPackageRequestBody.js.map