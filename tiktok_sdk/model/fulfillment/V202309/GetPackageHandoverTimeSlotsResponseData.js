"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309GetPackageHandoverTimeSlotsResponseData = void 0;
class Fulfillment202309GetPackageHandoverTimeSlotsResponseData {
    static getAttributeTypeMap() {
        return Fulfillment202309GetPackageHandoverTimeSlotsResponseData.attributeTypeMap;
    }
}
exports.Fulfillment202309GetPackageHandoverTimeSlotsResponseData = Fulfillment202309GetPackageHandoverTimeSlotsResponseData;
Fulfillment202309GetPackageHandoverTimeSlotsResponseData.discriminator = undefined;
Fulfillment202309GetPackageHandoverTimeSlotsResponseData.attributeTypeMap = [
    {
        "name": "canDropOff",
        "baseName": "can_drop_off",
        "type": "boolean"
    },
    {
        "name": "canPickup",
        "baseName": "can_pickup",
        "type": "boolean"
    },
    {
        "name": "canVanCollection",
        "baseName": "can_van_collection",
        "type": "boolean"
    },
    {
        "name": "dropOffPointUrl",
        "baseName": "drop_off_point_url",
        "type": "string"
    },
    {
        "name": "pickupSlots",
        "baseName": "pickup_slots",
        "type": "Array<Fulfillment202309GetPackageHandoverTimeSlotsResponseDataPickupSlots>"
    }
];
//# sourceMappingURL=GetPackageHandoverTimeSlotsResponseData.js.map