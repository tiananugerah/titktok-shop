"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fulfillment202309BatchShipPackagesResponse = void 0;
class Fulfillment202309BatchShipPackagesResponse {
    static getAttributeTypeMap() {
        return Fulfillment202309BatchShipPackagesResponse.attributeTypeMap;
    }
}
exports.Fulfillment202309BatchShipPackagesResponse = Fulfillment202309BatchShipPackagesResponse;
Fulfillment202309BatchShipPackagesResponse.discriminator = undefined;
Fulfillment202309BatchShipPackagesResponse.attributeTypeMap = [
    {
        "name": "code",
        "baseName": "code",
        "type": "number"
    },
    {
        "name": "data",
        "baseName": "data",
        "type": "Fulfillment202309BatchShipPackagesResponseData"
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
//# sourceMappingURL=BatchShipPackagesResponse.js.map