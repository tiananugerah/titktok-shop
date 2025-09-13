"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistics202309GetWarehouseDeliveryOptionsResponse = void 0;
class Logistics202309GetWarehouseDeliveryOptionsResponse {
    static getAttributeTypeMap() {
        return Logistics202309GetWarehouseDeliveryOptionsResponse.attributeTypeMap;
    }
}
exports.Logistics202309GetWarehouseDeliveryOptionsResponse = Logistics202309GetWarehouseDeliveryOptionsResponse;
Logistics202309GetWarehouseDeliveryOptionsResponse.discriminator = undefined;
Logistics202309GetWarehouseDeliveryOptionsResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Logistics202309GetWarehouseDeliveryOptionsResponseData"
    },
    {
        "name": "message",
        "baseName": "message",
        "type": "string"
    },
    {
        "name": "requestId",
        "baseName": "request_id",
        "type": "string"
    }
];
//# sourceMappingURL=GetWarehouseDeliveryOptionsResponse.js.map