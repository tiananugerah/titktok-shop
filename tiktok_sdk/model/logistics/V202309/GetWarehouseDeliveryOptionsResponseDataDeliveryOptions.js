"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions = void 0;
class Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions {
    static getAttributeTypeMap() {
        return Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions.attributeTypeMap;
    }
}
exports.Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions = Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions;
Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions.discriminator = undefined;
Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptions.attributeTypeMap = [
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    },
    {
        "name": "dimensionLimit",
        "baseName": "dimension_limit",
        "type": "Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsDimensionLimit"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "platform",
        "baseName": "platform",
        "type": "Array<string>"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "weightLimit",
        "baseName": "weight_limit",
        "type": "Logistics202309GetWarehouseDeliveryOptionsResponseDataDeliveryOptionsWeightLimit"
    }
];
//# sourceMappingURL=GetWarehouseDeliveryOptionsResponseDataDeliveryOptions.js.map