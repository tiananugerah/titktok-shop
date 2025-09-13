"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistics202309GetWarehouseListResponseDataWarehouses = void 0;
class Logistics202309GetWarehouseListResponseDataWarehouses {
    static getAttributeTypeMap() {
        return Logistics202309GetWarehouseListResponseDataWarehouses.attributeTypeMap;
    }
}
exports.Logistics202309GetWarehouseListResponseDataWarehouses = Logistics202309GetWarehouseListResponseDataWarehouses;
Logistics202309GetWarehouseListResponseDataWarehouses.discriminator = undefined;
Logistics202309GetWarehouseListResponseDataWarehouses.attributeTypeMap = [
    {
        "name": "address",
        "baseName": "address",
        "type": "Logistics202309GetWarehouseListResponseDataWarehousesAddress"
    },
    {
        "name": "effectStatus",
        "baseName": "effect_status",
        "type": "string"
    },
    {
        "name": "entityId",
        "baseName": "entity_id",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "isDefault",
        "baseName": "is_default",
        "type": "boolean"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "subType",
        "baseName": "sub_type",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    }
];
//# sourceMappingURL=GetWarehouseListResponseDataWarehouses.js.map