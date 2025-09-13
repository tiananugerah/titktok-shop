"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistics202309GetWarehouseListResponse = void 0;
class Logistics202309GetWarehouseListResponse {
    static getAttributeTypeMap() {
        return Logistics202309GetWarehouseListResponse.attributeTypeMap;
    }
}
exports.Logistics202309GetWarehouseListResponse = Logistics202309GetWarehouseListResponse;
Logistics202309GetWarehouseListResponse.discriminator = undefined;
Logistics202309GetWarehouseListResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Logistics202309GetWarehouseListResponseData"
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
//# sourceMappingURL=GetWarehouseListResponse.js.map