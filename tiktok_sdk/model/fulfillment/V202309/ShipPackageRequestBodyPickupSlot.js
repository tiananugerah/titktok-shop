"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309ShipPackageRequestBodyPickupSlot = void 0;
class Fulfillment202309ShipPackageRequestBodyPickupSlot {
    static getAttributeTypeMap() {
        return Fulfillment202309ShipPackageRequestBodyPickupSlot.attributeTypeMap;
    }
}
exports.Fulfillment202309ShipPackageRequestBodyPickupSlot = Fulfillment202309ShipPackageRequestBodyPickupSlot;
Fulfillment202309ShipPackageRequestBodyPickupSlot.discriminator = undefined;
Fulfillment202309ShipPackageRequestBodyPickupSlot.attributeTypeMap = [
    {
        "name": "endTime",
        "baseName": "end_time",
        "type": "number"
    },
    {
        "name": "startTime",
        "baseName": "start_time",
        "type": "number"
    }
];
//# sourceMappingURL=ShipPackageRequestBodyPickupSlot.js.map