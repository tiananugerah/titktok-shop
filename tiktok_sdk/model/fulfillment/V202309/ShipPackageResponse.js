"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309ShipPackageResponse = void 0;
class Fulfillment202309ShipPackageResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309ShipPackageResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309ShipPackageResponse = Fulfillment202309ShipPackageResponse;
Fulfillment202309ShipPackageResponse.discriminator = undefined;
Fulfillment202309ShipPackageResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "object"
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
//# sourceMappingURL=ShipPackageResponse.js.map