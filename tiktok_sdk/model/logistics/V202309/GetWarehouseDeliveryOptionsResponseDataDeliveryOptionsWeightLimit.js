"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit = void 0;
class Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit {
    static getAttributeTypeMap() {
        return Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit.attributeTypeMap;
    }
}
exports.Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit = Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit;
Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit.discriminator = undefined;
Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit.attributeTypeMap = [
    {
        "name": "maxWeight",
        "baseName": "max_weight",
        "type": "number"
    },
    {
        "name": "minWeight",
        "baseName": "min_weight",
        "type": "number"
    },
    {
        "name": "unit",
        "baseName": "unit",
        "type": "string"
    }
];
//# sourceMappingURL=GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit.js.map