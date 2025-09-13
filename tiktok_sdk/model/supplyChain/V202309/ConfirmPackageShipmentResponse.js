"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyChain202309ConfirmPackageShipmentResponse = void 0;
class SupplyChain202309ConfirmPackageShipmentResponse {
    static getAttributeTypeMap() {
        return SupplyChain202309ConfirmPackageShipmentResponse.attributeTypeMap;
    }
}
exports.SupplyChain202309ConfirmPackageShipmentResponse = SupplyChain202309ConfirmPackageShipmentResponse;
SupplyChain202309ConfirmPackageShipmentResponse.discriminator = undefined;
SupplyChain202309ConfirmPackageShipmentResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "SupplyChain202309ConfirmPackageShipmentResponseData"
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
//# sourceMappingURL=ConfirmPackageShipmentResponse.js.map