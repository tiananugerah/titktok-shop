"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistics202309GetGlobalSellerWarehouseResponse = void 0;
class Logistics202309GetGlobalSellerWarehouseResponse {
    static getAttributeTypeMap() {
        return Logistics202309GetGlobalSellerWarehouseResponse.attributeTypeMap;
    }
}
exports.Logistics202309GetGlobalSellerWarehouseResponse = Logistics202309GetGlobalSellerWarehouseResponse;
Logistics202309GetGlobalSellerWarehouseResponse.discriminator = undefined;
Logistics202309GetGlobalSellerWarehouseResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Logistics202309GetGlobalSellerWarehouseResponseData"
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
//# sourceMappingURL=GetGlobalSellerWarehouseResponse.js.map